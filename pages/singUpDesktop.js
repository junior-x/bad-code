import { Box, Button, Text, TextField, Image } from "@skynexui/components";
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

export default function SingUpDesktop() {
  const [username, setUsername] = React.useState("ello");
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
      roteamento.push(`/?`);
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
          backgroundColor: "#837FB1",
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
            maxWidth: "900px",
            borderRadius: "15px 15px 15px 15px",
            paddingHorizontal: "90px",
            paddingVertical: "30px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: `${appConfig.theme.colors.neutrals[700]}f1`,
            boxShadow: "9px 9px #837FB1, 10px 10px #313D49",
          }}
        >
          <Box
            as="form"
            onSubmit={onSubmit}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "60%" },
              marginTop: "32px",
            }}
          >
            <Titulo tag="h2">Sing Up! :)</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              label="Username"
              styleSheet={{ Content: "start" }}
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
              label="Password"
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
              type="email"
              label="E-mail"
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
              type="email"
              label="Confirm E-mail"
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
              type="phone"
              label="Celular"
              styleSheet={{ marginBottom: "21px" }}
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
              label="Cadastrar"
              onClick={() => (state.button = 1)}
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["600"],
                mainColor: appConfig.theme.colors.primary["000"],
                mainColorLight: appConfig.theme.colors.primary[200],
                mainColorStrong: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Box
              onSubmit={onSubmit}
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", sm: "50%" },
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              <Text
                variant="body3"
                styleSheet={{ color: appConfig.theme.colors.neutrals[300] }}
              >
                Não tem cadastro?
              </Text>
              <Button
                type="submit"
                label="Sing Up"
                onClick={() => (state.button = 2)}
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

            {/* <LogInTxt /> */}
          </Box>

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
        </Box>
      </Box>
    </>
  );
}
