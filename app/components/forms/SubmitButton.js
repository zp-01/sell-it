import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ description }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton description={description} onPress={handleSubmit} />;
};

export default SubmitButton;
