import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {check, decrease, increase} from '../../container/Intercom/intercomSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intercom.css';

const Intercom: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const password = useSelector((state: RootState) => state.intercom.value);

  return (
    <div className="intercom-container mt-2">
      <div className="password-display mb-3">
        <div className="display">
          {'*'.repeat(password.length)}
        </div>
      </div>
      <div className="buttons-container row g-2">
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('9'))}>9</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('8'))}>8</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('7'))}>7</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('4'))}>4</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('5'))}>5</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('6'))}>6</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('1'))}>1</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('2'))}>2</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('3'))}>3</button>
        </div>
        <div className="col-4">
          <button className="btn btn-secondary w-100" onClick={() => dispatch(decrease())}>{'<'}</button>
        </div>
        <div className="col-4">
          <button className="btn btn-primary w-100" onClick={() => dispatch(increase('0'))}>0</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success w-100" onClick={() => dispatch(check())}>E</button>
        </div>
      </div>
    </div>
  );
};

export default Intercom;