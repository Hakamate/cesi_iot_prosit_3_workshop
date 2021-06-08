import { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";

import Sensor, { ISensor } from "../../models/Sensor";

const router: Router = Router();

const sensors = [
  { id: 1, type: 'alpha', datas: [1, 2, 3] },
  { id: 2, type: 'beta', datas: [1, 2, 3], metrics: false },
  { id: 3, type: 'omega', datas: { a: 1, b: 2 } },
]

router.get("/", async (req, res: Response) => {
  const allSensors = await Sensor.find()
  if (!allSensors) {
    res.status(404).send({ error: "404 : No sensors found" })
  }
  res.status(200).send({ response: { allSensors } });
});

router.get('/:id', async function (req, res) {
  let sensorsSelect: ISensor = await Sensor.findOne({ id: parseInt(req.params.id) });

  if (sensorsSelect) {
    res.status(200).send({response : sensorsSelect});
  }
  else {
    res.status(404).send({ error: "404 : Sensor doesn't exist" })
  }
});

router.post('/create', async function (req, res) {
  let sensorsExist: ISensor = await Sensor.findOne({ id: parseInt(req.body.id) });
  // const sensorsExist = sensors.find(sensor => sensor.id == req.body.id);

  if (!req.body.id) {
    res.status(404).send({ error: "404 : Sensor need an ID" })
  }

  if (sensorsExist) {
    res.status(403).send({ error: "403 : Sensor already exist" })
  }

  else {
    await Sensor.create(req.body);
    const addedSensor = await Sensor.findOne({ id: parseInt(req.body.id) });
    res.status(201).send({ response: addedSensor});
  }
});

router.delete('/delete/:id', async function (req, res) {
  const sensorsSelected = await Sensor.findOneAndDelete({ id: parseInt(req.params.id) })
  
  if (sensorsSelected) {
    res.status(200).send({ response: `Sensor with id : ${sensorsSelected.id} has been deleted` });
  }
  else {
    res.status(404).send({ error: "404 : Sensor doesn't exist" })
  }
});

router.put('/update/:id', async function (req, res) {
  const sensorSelect = await Sensor.findOneAndUpdate({ id: parseInt(req.params.id) }, req.body, {new: true})
  
  if (!sensorSelect) {
    res.status(404).send({ error: "404 : Sensor doesn't exist" })
  }
  res.status(201).send({ response: sensorSelect })
});

export default router;
