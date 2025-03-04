import { Navigate } from "react-router-dom";
import { Input } from "@components/Form";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import useLogin from "@hooks/useLogin";
import { Heading } from "@components/common";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created , please login
            </Alert>
          )}

          {searchParams.get("message") === "login_required" && (
            <Alert variant="danger">Login to continue</Alert>
          )}

          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              name="email"
              label="Email Address"
              register={register}
              error={formErrors.email?.message}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              register={register}
              error={formErrors.password?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
