import { Box, Button, Text, TextField, Image, Icon } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";

function Titulo(props) {
  
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default function HomeMobile() {
  const [username, setUsername] = React.useState("junior-x");
  const roteamento = useRouter();

  const state = {
    button: 1,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.button === 1) {
      roteamento.push(`/chat?username=${username}`);
    }
    if (state.button === 2) {
      roteamento.push(`/singUp`);
    }
  };

  return (
    <>
      <Box
        styleSheet={{
          minHeight: "100vh",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAFAFA",
          margin: "36px",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            width: "100%",
            maxWidth: "720px",
            borderRadius: "15px 15px 15px 15px",
            padding: "32px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: `${appConfig.theme.colors.neutrals[700]}f1`,
            boxShadow: "9px 9px #FAFAFA, 10px 10px #313D49",
          }}
        >
          <Box
            as="form"
            onSubmit={ onSubmit }
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "60%" },
              textAlign: "center",
              marginTop: "32px",
            }}
          >
            <Titulo tag="h2">Bem Vindo de volta! :)</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name + " - " + appConfig.logIn}
            </Text>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "200px",
                padding: "16px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: "1px solid",
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: "10px",
                flex: 1,
                minHeight: "240px",
                marginBottom: "32px",
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: "50%",
                  marginBottom: "16px",
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                tag="a"
                href={`https://github.com/${username}`}
                variant="body4"
                styleSheet={{
                  textDecoration: "none",
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: "3px 10px",
                  borderRadius: "1000px",
                }}
                onMouseOver={(event) => {
                  event.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(event) => {
                  event.target.style.textDecoration = "none";
                }}
              >
                {username}
              </Text>
            </Box>
            <TextField
              fullWidth
              placeholder="Username"
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                const valor = event.target.value;
                setUsername(valor);
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <TextField
              fullWidth
              type="password"
              placeholder="Password"
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              onClink={() => (state.button = 1)}
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
              <Box styleSheet={{display: "flex", justifyContent: "space-between", width: "63%"}}>
              <Icon
                label="Icon Component"
                name="FaGithub"
                styleSheet={{height: "90px", fontSize: "30px", color: "#FAFAFA"}}
              />
              <Icon
                label="Icon Component"
                name="FaFigma"
                styleSheet={{height: "90px", fontSize: "24px", color: "#FAFAFA"}}
              />
              <Icon
                label="Icon Component"
                name="FaReact"
                styleSheet={{height: "90px", fontSize: "30px", color: "#FAFAFA"}}
              />
            </Box>
            <Box
              onSubmit={ onSubmit }
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", sm: "50%" },
                textAlign: "center",
              }}
            >
              <Text
                variant="body3"
                styleSheet={{ color: appConfig.theme.colors.neutrals[300] }}
              >
                N??o tem cadastro?
              </Text>
              <Button
                type="submit"
                label="Sing Up"
                onClick={() => (state.button = 2 )}
                styleSheet={{
                  textDecoration: "underline",
                  textColor: "white",
                  marginBottom: "32px",
                }}
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["200"],
                  mainColor: appConfig.theme.colors.neutrals["600"],
                  mainColorLight: appConfig.theme.colors.primary[600],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
