export default function SiteFooter() {
return (
<footer className="border-t p-4 text-sm text-gray-600">
  <div className="mx-auto max-w-5xl">
    © {new Date().getFullYear()} Tailrly. All rights reserved.
  </div>
</footer>
);
}
