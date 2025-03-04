import { Heading } from "@components/common";
import { Button, Form, Row, Col, Spinner } from "react-bootstrap";
import { Input } from "@components/Form";
import { Navigate } from "react-router-dom";
import useRegister from "@hooks/useRegister";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvilabilityStatus,
    emailOnBlurHandler,
    submitForm,
    register,
    handleSubmit,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title="User Registration" />

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />

            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />

            <Input
              label="email"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                formErrors.email?.message
                  ? formErrors.email.message
                  : emailAvilabilityStatus === "notAvailable"
                  ? "This email is already in use ."
                  : emailAvilabilityStatus === "failed"
                  ? "Error from the server ."
                  : ""
              }
              formText={
                emailAvilabilityStatus === "checking"
                  ? "Checking email availability ..."
                  : ""
              }
              success={
                emailAvilabilityStatus === "available" ? "Email available" : ""
              }
              disabled={emailAvilabilityStatus === "checking" ? true : false}
            />

            <Input
              label="password"
              name="password"
              type="password"
              register={register}
              error={formErrors.password?.message}
            />

            <Input
              label="confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              error={formErrors.confirmPassword?.message}
            />

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvilabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
            >
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

export default Register;
