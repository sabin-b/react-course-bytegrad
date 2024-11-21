export default function Footer() {
  return (
    <footer className="footer">
      <small style={{ textTransform: "capitalize" }}>
        &copy; {new Date().getFullYear().toString()} Designed by sabin.b | All
        rights reserved{" "}
      </small>
    </footer>
  );
}
