require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
require("../Schema/Connection.js");
const Course = require("../Schema/Course.js");
const Instructors = require("../Schema/instructor");
const Lectures = require("../Schema/LectureSchedule");
const gridfs = require("gridfs-stream");
const { GridFsStorage } = require("multer-gridfs-storage");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Batch = require("../Schema/batch.js");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const storage = new GridFsStorage({
  url: process.env.MONGOURL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      bucketName: "Course",
      filename: `${Date.now()}-Course-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });
app.get("/", (req, res) => {
  res.send("l");
});
app.post("/addcourse", upload.single("Image"), (req, res) => {
  try {
    const { Name, Level, Description } = req.body;
    if (Name === "" && Level === "" && Description === "") {
      res.send("null data no excepted");
    } else {
      Course.find({ Name: Name }).then((data) => {
        if (data == "") {
          const Image = req.file.filename;
          const cour = new Course({ Name, Level, Description, Image });
          cour.save();
          res.send("data added");
        } else {
          res.send("course already added");
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});
app.post("/addinstructor", (req, res) => {
  try {
    const { Name, Experience } = req.body;
    if (Name === "" && Experience === "") {
      res.send("null data no excepted");
    } else {
      const exp = new Instructors({ Name, Experience });
      exp.save();
      res.send("data added");
    }
  } catch (e) {
    console.log(e);
  }
});
app.post("/addbatch", (req, res) => {
  try {
    const { batchName, courseName } = req.body;
    if (batchName === "" && courseName === "") {
      res.send("null data no excepted");
    } else {
      Batch.find({ batchName: batchName }).then((data) => {
        if (data == "") {
          const bat = new Batch({ batchName, courseName });
          bat.save();
          res.send("data added");
        } else {
          res.send("already batch");
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});
app.post("/addlecture", (req, res) => {
  try {
    const { instructorName, courseName, Batch, Date } = req.body;
    if (
      instructorName === "" &&
      courseName === "" &&
      Batch === "" &&
      Date === ""
    ) {
      res.send("null data no excepted");
    } else {
      Lectures.find({ instructorName: instructorName, Date: Date })
        .then((data) => {
          if (data == "") {
            Lectures.find({ Batch: Batch, Date: Date }).then((dat) => {
              if (dat == "") {
                const exp = new Lectures({
                  instructorName,
                  courseName,
                  Batch,
                  Date,
                });
                exp.save().then(() => {
                  res.send("data added");
                });
              } else {
                res.send("already aasign lecture to the batch on this date");
              }
            });
          } else {
            res.send("already aasign lecture to the instructor on this date");
          }
        })
        .catch((er) => {
          console.log(er);
        });
    }
  } catch (e) {
    console.log(e);
  }
});
app.get("/getcourse", (req, res) => {
  Course.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      console.log(er);
    });
});
app.post("/getbatch", (req, res) => {
  Batch.find({ courseName: req.body.name })
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      console.log(er);
    });
});
app.get("/getinst", (req, res) => {
  Instructors.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      console.log(er);
    });
});
app.post("/getInst", (req, res) => {
  Instructors.findOne({ Name: req.body.Name })
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      console.log(er);
    });
});
app.get("/getlecture", (req, res) => {
  Lectures.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      console.log(er);
    });
});
app.post("/getlectures", (req, res) => {
  Lectures.find({ instructorName: req.body.name })
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      console.log(er);
    });
});

let fs;
const con = mongoose.connection;
con.once("open", () => {
  fs = gridfs(con.db, mongoose.mongo);
  fs.collection("Course");
});
app.get("/getcourse/:name", async (req, res) => {
  try {
    const file = await fs.files.findOne({ filename: req.params.name });
    const read = fs.createReadStream(file.filename);
    read.pipe(res);
  } catch (err) {
    console.log(err);
  }
});
app.listen(process.env.PORT, () => {
  console.log("port connected");
});
