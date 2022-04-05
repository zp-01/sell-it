import { StyleSheet, View } from "react-native";
import { useState } from "react";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import ActivityIndicator from "../components/ActivityIndicator";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const logInApi = useApi(authApi.login);

  const [error, setError] = useState();
  const { logIn } = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await logInApi.request(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || registerApi.loading} />
      <Screen style={styles.screen}>
        <AppForm
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton description="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
