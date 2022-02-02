import { Box, Button, Text, TextField, Image, Icon } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import PopUp from "./popUp";
import UserBalloon from "./userBalloon";

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

export default function HomeDesktop() {
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
      roteamento.push(`/singUpDesktop`);
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
          background: "linear-gradient(#837FB1, #6964A6)",
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
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "810px",
            borderRadius: "15px 15px 15px 15px",
            border: "10%",
            padding: "32px",
            paddingHorizontal: "30px",
            paddingRight: "45px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: `${appConfig.theme.colors.neutrals[700]}f1`,
            boxShadow: "12px 12px #6964A6, 13px 13px #FFF",
          }}
        >
        {/* <Box styleSheet={{backgroundColor: "white", position: "absolute", height: "90px", width: "90px",}} ></Box> */}
        <Box styleSheet={{width: "100%", height: "15px", display: "flex",}}>
          <Box styleSheet={{backgroundColor: "#FF656E", width: "15px", height: "15px", borderRadius: "15px 15px 15px 15px", marginRight: "1%",}}></Box>
          <Box styleSheet={{backgroundColor: "#FFCD4E", width: "15px", height: "15px", borderRadius: "15px 15px 15px 15px", marginRight: "1%",}}></Box>
          <Box styleSheet={{backgroundColor: "#A0F184", width: "15px", height: "15px", borderRadius: "15px 15px 15px 15px", marginRight: "1%",}}></Box>
        </Box>
          <Box
            as="form"
            id="entrar"
            onSubmit={onSubmit}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "60%" },
              textAlign: "center",
              marginTop: "32px",
              paddingLeft: "36px",
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
              id="entrar"
              label="Entrar"
              onClick={() => (state.button = 1)}
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[550],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
            <PopUp />
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", sm: "50%" },
                textAlign: "center",
              }}
            >
            <Box styleSheet={{display: "flex", justifyContent: "space-between", width: "63%"}}
            >
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
              <Text
                variant="body3"
                styleSheet={{ color: appConfig.theme.colors.neutrals[300] }}
              >
                Não tem cadastro?
              </Text>
              <Button
                type="submit"
                id="singUp"
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
          </Box>

          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
          <UserBalloon ></UserBalloon>
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
