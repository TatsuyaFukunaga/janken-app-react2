import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Janken = ({
  judgement,
  setJudgement,
  countWin,
  setCountWin,
  countLose,
  setCountLose,
  countDrow,
  setCountDrow,
  pc,
  setPc,
}) => {
  const [data, setData] = useState([]);
  const images = [
    {
      numOfJanken: 0,
      url: "/img/00.jpg",
      title: "ぐー",
      width: "33%",
    },
    {
      numOfJanken: 1,
      url: "/img/01.jpg",
      title: "ちょき",
      width: "33%",
    },
    {
      numOfJanken: 2,
      url: "/img/02.jpg",
      title: "ぱー",
      width: "33%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.8,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  const jankenJudge = (index) => {
    var pc0 = Math.floor(Math.random() * 3); //janken 0:グー 1:チョキ 2:パー
    setPc("0" + pc0.toString());
    var select = index;
    var result = pc0 - select;
    if (result === 0) {
      setCountDrow(countDrow + 1);
      setJudgement("draw");
    } else if ((result === 1) | (result === -2)) {
      setCountWin(countWin + 1);
      setJudgement("win");
    } else {
      setCountLose(countLose + 1);
      setJudgement("lose");
    }
    setData([
      { label: "win", value: `${countWin}`, color: "#0088FE" },
      { label: "lose", value: `${countLose}`, color: "#00C49F" },
      { label: "draw", value: `${countDrow}`, color: "#FFBB28" },
    ]);
  };

  return (
    <>
      <hr></hr>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={() => jankenJudge(index)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      <hr></hr>

      <div className="pc_site">
        <h2>PC側</h2>
        <img src={"/img/" + pc + ".jpg"} alt={pc}></img>
      </div>
      <br></br>
      <div className="result">
        <h2>結果</h2>
        <img src={"/img/" + judgement + ".jpg"} alt={judgement}></img>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.value}`,
              arcLabelMinAngle: 35,
              arcLabelRadius: "60%",
              data,
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </>
  );
};

export default Janken;
