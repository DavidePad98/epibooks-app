import Alert from "react-bootstrap/Alert";

const WelcomeAlert = () => {
  return (
    <>
      <Alert variant="warning" className="rounded-0">
        Benvenuto nello shop di libri <b>Fantasy!</b>
      </Alert>
    </>
  );
};

export default WelcomeAlert;
