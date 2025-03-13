import "../styles/globals.css";
export const metadata = {
  title: "My App Login",
};

export default function RootLayout ({children}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}