import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Функция для конвертации Цельсия в Фаренгейт
  const toFahrenheit = (c) => {
    return (c * 9/5) + 32;
  };

  // Функция для конвертации Фаренгейта в Цельсий
  const toCelsius = (f) => {
    return (f - 32) * 5/9;
  };

  // Обработчик изменения значения в поле Цельсия
  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    // Обработка ошибки, если ввод не числовой
    if (!isNaN(celsiusValue) && celsiusValue !== '') {
      setFahrenheit(toFahrenheit(parseFloat(celsiusValue)).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  // Обработчик изменения значения в поле Фаренгейта
  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    // Обработка ошибки, если ввод не числовой
    if (!isNaN(fahrenheitValue) && fahrenheitValue !== '') {
      setCelsius(toCelsius(parseFloat(fahrenheitValue)).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <Grid container spacing={2} style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <Grid item xs={12}>
        <TextField
          label="Цельсий"
          variant="outlined"
          fullWidth
          value={celsius}
          onChange={handleCelsiusChange}
          type="number"
          inputProps={{ step: '0.01' }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Фаренгейт"
          variant="outlined"
          fullWidth
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          type="number"
          inputProps={{ step: '0.01' }}
        />
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
