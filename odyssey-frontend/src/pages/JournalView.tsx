
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { JournalEntry, Comment } from '@/types';
import { journalApi, socialApi } from '@/services/api';
import { useToast } from '@/hooks/use-toast';
import ShareJournal from '@/components/sharing/ShareJournal';

import Navbar from '@/components/layout/Navbar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  Edit, 
  Globe, 
  Heart, 
  MapPin, 
  ThumbsUp, 
  Trash, 
  User,
  Loader2 
} from 'lucide-react';

const JournalView = () => {
  const { id } = useParams<{ id: string }>();
  const [journal, setJournal] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const GEMINI_API_KEY = "AIzaSyCDkWv9Lw5FiIXTbjfZ4Q26VveoSeQvSgM";
  useEffect(() => {
    const fetchJournal = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const journalData = await journalApi.getJournalById(id);
        setJournal(journalData);
      } catch (error) {
        console.error('Failed to fetch journal:', error);
        toast({
          variant: "destructive",
          description: 'Failed to load journal. It may be private or no longer exist.',
        });
        navigate('/journals');
      } finally {
        setLoading(false);
      }
    };
  
    fetchJournal();
  }, [id, toast, navigate]);

  const handleViewMap = async () => {
    const prompt = `
Extract the latitude and longitude of the place provided below. 
Respond ONLY in pure JSON. Do not include markdown or any extra text. 
JSON format:
{
  "latitude": 17.9784,
  "longitude": 79.5941
}
Place: ${location}`;

    const requestBody = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    };

    try {
      console.log("Fetching gemini loc");
      const res = await fetch(
        
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log("Fetched gemini loc");
      console.log(res);
      const data = await res.json();

      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

      const jsonMatch = textResponse.match(/{[^}]+}/);
      if (!jsonMatch) throw new Error("Invalid Gemini response");

      const coords = JSON.parse(jsonMatch[0]);
      const { latitude, longitude } = coords;

      const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(mapUrl, "_blank");
    } catch (error) {
      console.error("Error getting coordinates:", error);
    }
  };
  const handleAddComment = async () => {
    if (!comment.trim() || !id || !isAuthenticated) return;
    
    setSubmitting(true);
    try {
      await socialApi.addComment(id, comment);
      
      const updatedJournal = await journalApi.getJournalById(id);
      setJournal(updatedJournal);
      setComment('');
      
      toast({
        description: 'Comment added successfully',
      });
    } catch (error) {
      console.error('Failed to add comment:', error);
      toast({
        variant: "destructive",
        description: 'Failed to add comment',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleAddReaction = async (type: string) => {
    if (!id || !isAuthenticated) return;
    
    try {
      await socialApi.addReaction(id, type);
      
      // Refetch the journal to get updated reactions
      const updatedJournal = await journalApi.getJournalById(id);
      setJournal(updatedJournal);
    } catch (error) {
      console.error('Failed to add reaction:', error);
      toast({
        variant: "destructive",
        description: 'Failed to add reaction',
      });
    }
  };

  const handleDeleteJournal = async () => {
    if (!id || !journal || journal.userId !== user?.id) return;
    
    if (window.confirm('Are you sure you want to delete this journal? This action cannot be undone.')) {
      try {
        await journalApi.deleteJournal(id);
        toast({
          description: 'Journal deleted successfully',
        });
        navigate('/journals', { state: { refresh: Date.now() } });
      } catch (error) {
        console.error('Failed to delete journal:', error);
        toast({
          variant: "destructive",
          description: 'Failed to delete journal',
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-center items-center min-h-[50vh]">
            <Loader2 className="h-8 w-8 animate-spin mr-2" />
            <p>Loading journal...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!journal) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col justify-center items-center min-h-[50vh]">
            <h1 className="text-2xl font-bold mb-4">Journal not found</h1>
            <p className="mb-6">This journal may have been removed or is private.</p>
            <Button asChild>
              <Link to="/journals">Back to Journals</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const isOwner = user?.id === journal.userId;
  const formattedDate = new Date(journal.createdAt).toLocaleDateString();
  const formattedTime = new Date(journal.createdAt).toLocaleTimeString();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Journal header */}
          <div className="flex justify-between items-start mb-6">
            
            <h1 className="text-3xl font-bold">{journal.title}</h1>
            <div className="flex items-center gap-2">
              {isOwner && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/journal/edit/${journal.id}`}><Edit className="h-4 w-4 mr-2" /> Edit</Link>
                </Button>
                <Button variant="destructive" size="sm" onClick={handleDeleteJournal}>
                  <Trash className="h-4 w-4 mr-2" /> Delete
                </Button>
              </div>
            )}
            <ShareJournal journalId={journal.id} title={journal.title} />
            </div>
            
          </div>
          
          {/* Journal metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>By: {journal.userId}</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" />
              <span>{journal.isPublic ? 'Public' : 'Private'}</span>
            </div>
            {journal.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{journal.location.name || `${journal.location.city || ''}, ${journal.location.country || ''}`}</span>
              </div>
            )}
          </div>
          
          {/* Journal content */}
          <Card className="mb-8">
            {journal.images && journal.images.length > 0 && (
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <img 
                  src={journal.images[0]} 
                  alt={journal.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                {journal.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              {journal.images && journal.images.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {journal.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-md">
                      <img 
                        src={image} 
                        alt={`${journal.title} - ${index + 2}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-4">
                {isAuthenticated && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleAddReaction('like')}
                    className="flex items-center gap-1"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>
                      {journal.reactions.find(r => r.type === 'like')?.count || 0}
                    </span>
                  </Button>
                )}
                {isAuthenticated && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleAddReaction('love')}
                    className="flex items-center gap-1"
                  >
                    <Heart className="h-4 w-4" />
                    <span>
                      {journal.reactions.find(r => r.type === 'love')?.count || 0}
                    </span>
                  </Button>
                )}
              </div>
              
              {journal.location && (
                <Button onClick={handleViewMap} variant="outline" size="sm" asChild>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${journal.location.latitude},${journal.location.longitude}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4 mr-1" /> View on Map
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
          
          {/* Comments section */}
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          
          {isAuthenticated ? (
            <div className="mb-6">
              <Textarea
                placeholder="Write a comment..."
                className="mb-2"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button 
                onClick={handleAddComment} 
                disabled={!comment.trim() || submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Posting...
                  </>
                ) : 'Post Comment'}
              </Button>
            </div>
          ) : (
            <Card className="mb-6">
              <CardContent className="py-4">
                <p>Please <Link to="/login" className="text-primary">log in</Link> to leave a comment.</p>
              </CardContent>
            </Card>
          )}
          
          {journal.comments && journal.comments.length > 0 ? (
            <div className="space-y-4">
              {journal.comments.map((comment) => (
                <Card key={comment.id}>
                  <CardHeader className="py-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.userAvatar} alt={comment.userName} />
                        <AvatarFallback>{comment.userName?.charAt(0) || 'U'}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-sm font-medium">{comment.userName || 'Anonymous'}</CardTitle>
                        <CardDescription className="text-xs">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="py-2">
                    <p>{comment.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalView;