import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiagnosticProvider } from './hooks/useDiagnostic';
import { AuthProvider } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <DiagnosticProvider>
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
