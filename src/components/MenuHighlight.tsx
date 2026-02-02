import { Separator } from "@/components/ui/separator";

export default function MenuHighlight() {
  return (
    <section className="bg-muted/5 py-24 text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Daylight Brews, <br />
              Midnight Pours.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                By day, we serve single-origin roasts from small-batch cultivators. 
                Each cup is dialed in to perfection, highlighting the nuanced notes of the bean.
              </p>
              <p>
                By night, the espresso machine rests and the shakers wake up. 
                Our cocktail program features coffee-infused twists on classics and 
                botanical inventions designed to sip slowly while the music plays.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-primary">Signature Pour-Over</h4>
                <p className="text-sm text-muted-foreground">Ethiopian Yirgacheffe • Floral & Citrus notes</p>
                <Separator className="bg-primary/20" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-primary">The Chord Old Fashioned</h4>
                <p className="text-sm text-muted-foreground">Rye, Cold Brew Reduction, Orange Bitters</p>
                <Separator className="bg-primary/20" />
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-ncDYa7OJNhgHmuOraMwfLDVN.png?st=2026-02-02T19%3A09%3A12Z&se=2026-02-02T21%3A09%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=1726b4ce-fee1-450b-8b92-1731ad8745f6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-02-02T09%3A51%3A56Z&ske=2026-02-03T09%3A51%3A56Z&sks=b&skv=2024-08-04&sig=QsgQ57huaUn2hSFqXhuXQ%2BAcJkhDoLvEPz0XTJMyO4c%3D" 
                alt="Latte art detail" 
                className="aspect-[3/4] w-full object-cover grayscale transition-all hover:grayscale-0"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-yJi9UYK2Gm5UPqPypKI1VbL1.png?st=2026-02-02T19%3A09%3A31Z&se=2026-02-02T21%3A09%3A31Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=52f8f7b3-ca8d-4b21-9807-8b9df114d84c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-02-02T20%3A09%3A31Z&ske=2026-02-03T20%3A09%3A31Z&sks=b&skv=2024-08-04&sig=BK0mW3oCvRuF3E8w0GI0vVk%2B43mU9/%2BToCkmQK1w72M%3D" 
                alt="Cocktail in dark setting" 
                className="aspect-[3/4] w-full object-cover grayscale transition-all hover:grayscale-0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
