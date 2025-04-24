
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function CallToAction() {
  const { isAuthenticated } = useAuth();
  
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-primary-foreground font-bold mb-4">
            Start Documenting Your Travel Story Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who use Odyssey to preserve their memories and share their adventures with the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to={isAuthenticated ? "/create" : "/register"}>
                {isAuthenticated ? "Create Your First Journal" : "Sign Up Free"}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/explore">
                Explore Journals
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
