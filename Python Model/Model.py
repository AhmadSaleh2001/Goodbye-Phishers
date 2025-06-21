import pickle
import pandas as pd
import numpy as n

SVM = None
Vector = None
with open('MODELSVM.pkl', 'rb') as handle:
    SVM = pickle.load(handle)

with open('vectorizer.pkl', 'rb') as handle:
    Vector = pickle.load(handle)

