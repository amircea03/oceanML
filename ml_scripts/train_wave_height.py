"""Script to train wave height model."""
import openmeteo_requests

import requests_cache
import pandas as pd
from retry_requests import retry
from sklearn.preprocessing import MinMaxScaler
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import csv
from wave_height_model import WaveHeightModel

# Setup the Open-Meteo API client with cache and retry on error
cache_session = requests_cache.CachedSession('.cache', expire_after = 3600)
retry_session = retry(cache_session, retries = 5, backoff_factor = 0.2)
openmeteo = openmeteo_requests.Client(session = retry_session)

wave_model = WaveHeightModel(cache_session, retry_session, openmeteo)
