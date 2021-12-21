import express from 'express';
import { getPatients, createPatient, getPatient, deletePatient, updatePatient } from '../controller/patient.controller.js';

const patientRoutes = express.Router();

patientRoutes.route('/')
  .get(getPatients)
  .post(createPatient);

patientRoutes.route('/:id')
  .get(getPatient)
  .put(updatePatient)
  .delete(deletePatient);

export default patientRoutes;
