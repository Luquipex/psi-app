import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiagnosticProvider } from './hooks/useDiagnostic';
import { AuthProvider } from './hooks/useAuth';
import AdBlockerDetector from './components/ui/AdBlockerDetector';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <DiagnosticProvider>
                    <AdBlockerDetector />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        <Route path="/result" element={<ResultPage />} />
                    </Routes>
                </DiagnosticProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
