import Hero from '@/components/public/Hero'
import ExplorationMap from '@/components/public/ExplorationMap'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      
      <section id="map-section" className="relative w-full h-screen bg-background">
        <ExplorationMap />
      </section>

      {/* Footer / Contact section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/20 px-4">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to collaborate?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Whether you&apos;re looking to build something amazing or just want to chat about tech, I&apos;m here for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@liamvonastoria.dev"
              className="px-8 py-4 bg-primary text-background rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Send an Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold transition-all hover:bg-primary/10"
            >
              View on GitHub
            </a>
          </div>
          <p className="mt-12 text-sm text-foreground/50">
            © 2024 Liam Von Astoria. Crafted with care.
          </p>
        </div>
      </section>
    </main>
  )
}
