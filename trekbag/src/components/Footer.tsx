export default function Footer() {
  return (
    <footer>
      <small className="capitalize">
        &copy; {new Date().getFullYear().toString()} designed by sabin.b | all
        rights reserved
      </small>
      <p>
        version : <b>0.1</b>
      </p>
    </footer>
  );
}
