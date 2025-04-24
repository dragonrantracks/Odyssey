
import React, { useEffect, useRef, useState } from 'react';
import { JournalEntry } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock implementation of a map component
// In a real app, this would use a map library like Leaflet or Mapbox
export default function InteractiveMap({ journals }: { journals: JournalEntry[] }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [selectedJournal, setSelectedJournal] = useState<JournalEntry | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Filter journals with valid locations
  const validJournals = journals.filter(journal => 
    journal.location && 
    typeof journal.location.latitude === 'number' &&
    typeof journal.location.longitude === 'number'
  );

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
      
      // Select the first journal after map loads
      if (validJournals.length > 0) {
        setSelectedJournal(validJournals[0]);
      }
    }, 100000);
    
    return () => clearTimeout(timer);
  }, [validJournals]);

  const selectNextJournal = () => {
    if (!selectedJournal) return;
    
    const currentIndex = validJournals.findIndex(j => j.id === selectedJournal.id);
    const nextIndex = (currentIndex + 1) % validJournals.length;
    setSelectedJournal(validJournals[nextIndex]);
  };

  const selectPrevJournal = () => {
    if (!selectedJournal) return;
    
    const currentIndex = validJournals.findIndex(j => j.id === selectedJournal.id);
    const prevIndex = (currentIndex - 1 + validJournals.length) % validJournals.length;
    setSelectedJournal(validJournals[prevIndex]);
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg border">
      {/* Map container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full bg-gray-200 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2874&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Map loading indicator */}
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        
        {/* Map markers */}
        {mapLoaded && validJournals.map((journal, index) => (
          <div 
            key={journal.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
              selectedJournal?.id === journal.id ? 'z-10 scale-125' : 'z-0 scale-100'
            }`}
            style={{
              left: `${((journal.location.longitude + 180) / 360) * 100}%`,
              top: `${((90 - journal.location.latitude) / 180) * 100}%`,
            }}
            onClick={() => setSelectedJournal(journal)}
          >
            <div className={`w-4 h-4 rounded-full ${selectedJournal?.id === journal.id ? 'bg-primary shadow-lg' : 'bg-accent-foreground'}`}>
              <div className={`absolute animate-ping w-4 h-4 rounded-full bg-primary/30 ${selectedJournal?.id === journal.id ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Journal card overlay */}
      {selectedJournal && (
        <Card className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-card/95 shadow-lg backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg line-clamp-1">{selectedJournal.title}</h3>
              <div className="flex space-x-1">
                <Button size="icon" variant="ghost" onClick={selectPrevJournal}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={selectNextJournal}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {selectedJournal.images && selectedJournal.images.length > 0 && (
              <div className="mb-2 h-32 rounded-md overflow-hidden">
                <img src={selectedJournal.images[0]} alt={selectedJournal.title} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
              <span>{selectedJournal.location.name}</span>
              <span>{new Date(selectedJournal.createdAt).toLocaleDateString()}</span>
            </div>
            
            <p className="text-sm line-clamp-2">{selectedJournal.content}</p>
            
            <div className="mt-3">
              <Button size="sm" variant="outline" asChild className="w-full">
                <a href={`/journals/${selectedJournal.id}`}>View Journal</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
