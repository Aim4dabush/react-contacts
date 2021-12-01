import LoginForm from "./LoginForm";

const LoginPage = (props) => {
  return (
    <div
      className="col-4 bg-secondary bg-opacity-25 px-5 py-5 my-3 d-flex justify-content-center align-items-center"
      style={{ height: 500 }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;
