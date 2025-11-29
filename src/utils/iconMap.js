// Icon mapper para convertir strings a componentes de Lucide React
import {
    Target, Zap, Brain, CheckCircle, Flame, BarChart, Shield,
    Eye, Key, Battery, Activity, Users, AlertTriangle, ChevronRight
} from 'lucide-react';

export const iconMap = {
    Target,
    Zap,
    Brain,
    CheckCircle,
    Flame,
    BarChart,
    Shield,
    Eye,
    Key,
    Battery,
    Activity,
    Users,
    AlertTriangle,
    ChevronRight
};

// Función helper para obtener el componente de icono
export const getIcon = (iconName) => {
    return iconMap[iconName] || ChevronRight;
};
