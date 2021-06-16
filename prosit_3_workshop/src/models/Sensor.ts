import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the Sensor Schema for TypeScript.
 * @param id:number
 * @param type:string
 * @param datas:Array<number>
 * @param metrics:boolean
 */
export interface ISensor extends Document {
  id: number;
  type: string;
  datas: Array<number>;
  metrics: boolean
}

const sensorSchema: Schema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  type: {
    type: String,
  },
  datas: {
    type: [Number],
  },
  metrics: {
    type: Boolean,
  },
});

const Sensor: Model<ISensor> = model("Sensor", sensorSchema);

export default Sensor;
