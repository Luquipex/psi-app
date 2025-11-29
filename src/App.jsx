import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiagnosticProvider } from './hooks/useDiagnostic';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
    return (
        <Router>
            <DiagnosticProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/result" element={<ResultPage />} />
                </Routes>
            </DiagnosticProvider>
        </Router>
    );
}

export default App;
