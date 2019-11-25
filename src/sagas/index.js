import { fork } from 'redux-saga/effects';
import DashboardSagas from '../dashboard/sagas';

export default function* main() {
    yield fork(DashboardSagas);
}