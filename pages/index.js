import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import appConfig from "../config";

const Title = (props) => {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
        }
      `}</style>
    </>
  );
};

export default function Home() {
  const [username, setUsername] = React.useState("junior-x");
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
        }}
      >
        {/* <Box
          styleSheet={{
            fontWeight: "500",
            width: "90%",
            maxWidth: "700px",
            textAlign: "center",
            padding: "12px",
            color: "white",
            backgroundColor: `${appConfig.theme.colors.primary[500]}60`,
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 17px )",
            borderRadius: " 5px 5px 0 0",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            borderBottom: "0",
          }}
        >
          Um chat para todos que desejam, como um foguete, decolar na
          programação.
        </Box> */}
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            width: "90%",
            maxWidth: "700px",
            borderRadius: "15px 15px 15px 15px",
            padding: "32px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: `${appConfig.theme.colors.neutrals[700]}f1`,
          }}
        >
        
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[250],
              }}
            >
              {appConfig.name}
            </Text>
            <TextField
            onChange={(event) => {
                const value = event.target.value;
                setUsername(value);
            }}
            fullWidth
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
            styleSheet={{
                width: "100%",
            }}
            buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[550],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[700],
            }}
            />

            <Text
              variant="body4"
              styleSheet={{
                marginTop: "32px",
                color: appConfig.theme.colors.neutrals[250],
              }}
            >
                <Title tag="h5"s >Não tem cadastro?</Title>
                {appConfig.singUp}
            </Text>
            
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
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}