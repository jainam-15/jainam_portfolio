export function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Jainam Shah. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Designed and built with extreme attention to detail.
        </p>
      </div>
    </footer>
  );
}
