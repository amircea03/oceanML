"""Wave Height Model"""

import openmeteo_requests

import requests_cache
import pandas as pd
from retry_requests import retry
from sklearn.preprocessing import MinMaxScaler
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import csv

class WaveHeightModel():
    """Wave Height Model that accesses openmeteo API and initializes Keras model."""
    def __init__(self, cache_session, retry_session, openmeteo):
        self.cache_session = cache_session
        self.retry_session = retry_session
        self.openmeteo = openmeteo
        self.model = []
        self.url = "https://marine-api.open-meteo.com/v1/marine"

    def request_wave_data(self, latitude, longitude):
        """Request to openmeteo API."""
        params = {
	        "latitude": latitude,
	        "longitude": longitude,
	        "hourly": "wave_height"
        }
        responses = self.openmeteo.weather_api(self.url, params=params)
        return responses

    def process_hourly_data(self, response):
        """Create pandas dataframe for hourly data and scale with sklearn."""
        hourly = response.Hourly()
        hourly_wave_height = hourly.Variables(0).ValuesAsNumpy()
        hourly_data = {"date": pd.date_range(
            start = pd.to_datetime(hourly.Time(), unit = "s"),
            end = pd.to_datetime(hourly.TimeEnd(), unit = "s"),
            freq = pd.Timedelta(seconds = hourly.Interval()),
            inclusive = "left"
        )}
        hourly_data["wave_height"] = hourly_wave_height
        hourly_dataframe = pd.DataFrame(data = hourly_data)
        scaler = MinMaxScaler(feature_range=(0, 1))
        scaled_wave_height = scaler.fit_transform(
            np.array(hourly_dataframe['wave_height']).reshape(-1,1)
        )
        return scaled_wave_height

    def split_set(self, data, split):
        """Split into training and validation sets based on split param."""
        train_size = int(len(data) * split)
        test_size = len(data) - train_size
        train_data, test_data = data[0:train_size,:], data[train_size:len(data),:1]
        return train_data, test_data
