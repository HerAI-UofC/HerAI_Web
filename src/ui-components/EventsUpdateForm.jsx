/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getEvents } from "../graphql/queries";
import { updateEvents } from "../graphql/mutations";
const client = generateClient();
export default function EventsUpdateForm(props) {
  const {
    id: idProp,
    events: eventsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    location: "",
    date: "",
    isUpcoming: false,
    summary: "",
    description: "",
    videoDescription: "",
    pdfDescription: "",
    presenters: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [location, setLocation] = React.useState(initialValues.location);
  const [date, setDate] = React.useState(initialValues.date);
  const [isUpcoming, setIsUpcoming] = React.useState(initialValues.isUpcoming);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [videoDescription, setVideoDescription] = React.useState(
    initialValues.videoDescription
  );
  const [pdfDescription, setPdfDescription] = React.useState(
    initialValues.pdfDescription
  );
  const [presenters, setPresenters] = React.useState(initialValues.presenters);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventsRecord
      ? { ...initialValues, ...eventsRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setLocation(cleanValues.location);
    setDate(cleanValues.date);
    setIsUpcoming(cleanValues.isUpcoming);
    setSummary(cleanValues.summary);
    setDescription(cleanValues.description);
    setVideoDescription(cleanValues.videoDescription);
    setPdfDescription(cleanValues.pdfDescription);
    setPresenters(cleanValues.presenters);
    setErrors({});
  };
  const [eventsRecord, setEventsRecord] = React.useState(eventsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEvents.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEvents
        : eventsModelProp;
      setEventsRecord(record);
    };
    queryData();
  }, [idProp, eventsModelProp]);
  React.useEffect(resetStateValues, [eventsRecord]);
  const validations = {
    title: [],
    location: [],
    date: [],
    isUpcoming: [],
    summary: [],
    description: [],
    videoDescription: [],
    pdfDescription: [],
    presenters: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title: title ?? null,
          location: location ?? null,
          date: date ?? null,
          isUpcoming: isUpcoming ?? null,
          summary: summary ?? null,
          description: description ?? null,
          videoDescription: videoDescription ?? null,
          pdfDescription: pdfDescription ?? null,
          presenters: presenters ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateEvents.replaceAll("__typename", ""),
            variables: {
              input: {
                id: eventsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              location,
              date,
              isUpcoming,
              summary,
              description,
              videoDescription,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location: value,
              date,
              isUpcoming,
              summary,
              description,
              videoDescription,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={date && convertToLocal(new Date(date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              location,
              date: value,
              isUpcoming,
              summary,
              description,
              videoDescription,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SwitchField
        label="Is upcoming"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isUpcoming}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              location,
              date,
              isUpcoming: value,
              summary,
              description,
              videoDescription,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.isUpcoming ?? value;
          }
          if (errors.isUpcoming?.hasError) {
            runValidationTasks("isUpcoming", value);
          }
          setIsUpcoming(value);
        }}
        onBlur={() => runValidationTasks("isUpcoming", isUpcoming)}
        errorMessage={errors.isUpcoming?.errorMessage}
        hasError={errors.isUpcoming?.hasError}
        {...getOverrideProps(overrides, "isUpcoming")}
      ></SwitchField>
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              date,
              isUpcoming,
              summary: value,
              description,
              videoDescription,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              date,
              isUpcoming,
              summary,
              description: value,
              videoDescription,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Video description"
        isRequired={false}
        isReadOnly={false}
        value={videoDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              date,
              isUpcoming,
              summary,
              description,
              videoDescription: value,
              pdfDescription,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.videoDescription ?? value;
          }
          if (errors.videoDescription?.hasError) {
            runValidationTasks("videoDescription", value);
          }
          setVideoDescription(value);
        }}
        onBlur={() => runValidationTasks("videoDescription", videoDescription)}
        errorMessage={errors.videoDescription?.errorMessage}
        hasError={errors.videoDescription?.hasError}
        {...getOverrideProps(overrides, "videoDescription")}
      ></TextField>
      <TextField
        label="Pdf description"
        isRequired={false}
        isReadOnly={false}
        value={pdfDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              date,
              isUpcoming,
              summary,
              description,
              videoDescription,
              pdfDescription: value,
              presenters,
            };
            const result = onChange(modelFields);
            value = result?.pdfDescription ?? value;
          }
          if (errors.pdfDescription?.hasError) {
            runValidationTasks("pdfDescription", value);
          }
          setPdfDescription(value);
        }}
        onBlur={() => runValidationTasks("pdfDescription", pdfDescription)}
        errorMessage={errors.pdfDescription?.errorMessage}
        hasError={errors.pdfDescription?.hasError}
        {...getOverrideProps(overrides, "pdfDescription")}
      ></TextField>
      <TextField
        label="Presenters"
        isRequired={false}
        isReadOnly={false}
        value={presenters}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              location,
              date,
              isUpcoming,
              summary,
              description,
              videoDescription,
              pdfDescription,
              presenters: value,
            };
            const result = onChange(modelFields);
            value = result?.presenters ?? value;
          }
          if (errors.presenters?.hasError) {
            runValidationTasks("presenters", value);
          }
          setPresenters(value);
        }}
        onBlur={() => runValidationTasks("presenters", presenters)}
        errorMessage={errors.presenters?.errorMessage}
        hasError={errors.presenters?.hasError}
        {...getOverrideProps(overrides, "presenters")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || eventsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || eventsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
