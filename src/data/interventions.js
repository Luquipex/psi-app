export const INTERVENTIONS = {
    // --- RAMA 1: PRODUCTIVIDAD ---
    "shiny_object": {
        id: "shiny_object",
        profile: {
            marketing_name: "El Explorador de Novedad",
            clinical_name: "Búsqueda de Novedad / Déficit de Dopamina Tónica",
            quote: "Tengo iniciativa de sobra, pero 'acabativa' casi nula."
        },
        content: {
            hook_text: "Tu navegador tiene probablemente más de 15 pestañas abiertas en este momento, cada una representando una idea brillante o un proyecto que te prometiste empezar 'esta semana'. Tu mente funciona como una fábrica de fuegos artificiales: generas una cantidad increíble de energía al inicio. Sin embargo, tu cementerio de proyectos 'a medio terminar' es extenso. En el momento en que la novedad desaparece y el trabajo se vuelve rutinario, tu cerebro 'apaga' el interruptor del interés.",
            science_explanation: "No eres vago. Experimentas una desregulación entre la Dopamina Fásica (picos de novedad) y la Dopamina Tónica (esfuerzo sostenido). Cuando la novedad cae, tu cerebro sufre un 'Error de Predicción de Recompensa', interpretando que la tarea ya no vale la pena biológicamente.",
            intervention: {
                tool_name: "Protocolo de Finalización",
                tool_type: "Técnica Cognitivo-Conductual",
                duration: "5-10 min",
                steps: [
                    "Elige al Zombi: Selecciona la tarea bloqueada al 80% que más ruido te causa.",
                    "Visualiza el Alivio: Cierra los ojos e imagina la sensación física de paz de haber terminado.",
                    "Define el Clic Final: Escribe la única acción física que cierra la tarea (ej: 'Pulsar enviar').",
                    "Activa el Cronómetro: Pon una alarma de 2 minutos y ejecuta esa acción antes de que suene."
                ],
                why_it_works: "Reduce la fricción de inicio y engaña a la amígdala con pasos pequeños, permitiendo obtener dopamina por el cierre y no solo por la novedad."
            }
        }
    },
    "brain_fog": {
        id: "brain_fog",
        profile: {
            marketing_name: "El Pensador Sobrecargado",
            clinical_name: "Sobrecarga Cognitiva / Fatiga de Decisión",
            quote: "Siento que intento correr bajo el agua: mucho esfuerzo, poco avance."
        },
        content: {
            hook_text: "Sientes que tu cabeza está llena de una neblina densa. Tienes tantas pestañas abiertas en tu cerebro que tu 'memoria RAM' ha colapsado. A menudo te encuentras releyendo el mismo párrafo tres veces u olvidando a qué ibas a una habitación. Lo peor es esa sensación al final del día: estás exhausto pero sientes una culpa punzante porque sientes que no has avanzado en nada importante.",
            science_explanation: "Sufres Agotamiento de la Memoria de Trabajo. Tu córtex prefrontal tiene un límite para procesar información. Al superar tu Carga Cognitiva, tu cerebro entra en 'Modo de Ahorro de Energía', provocando Fatiga de Decisión: priorizar se vuelve imposible.",
            intervention: {
                tool_name: "La Matriz de Triaje",
                tool_type: "Herramienta de Organización Cognitiva",
                duration: "8 min",
                steps: [
                    "Vomita en Papel: Escribe a mano todo lo que tienes en la cabeza sin filtrar.",
                    "Dibuja la Cruz: Traza una cruz grande en una hoja limpia para hacer 4 cuadrantes.",
                    "Filtra la Urgencia: Mueve solo 3 ítems a la Caja 1 (Hacer YA). Tacha el resto o agéndalo.",
                    "Esconde la Lista: Guarda la hoja y ejecuta el primer ítem de la Caja 1 ahora mismo."
                ],
                why_it_works: "Externalizar las tareas libera memoria de trabajo, permitiendo que tu cerebro deje de gastar energía en 'recordar' y la use para 'ejecutar'."
            }
        }
    },
    "paralysis": {
        id: "paralysis",
        profile: {
            marketing_name: "El Arquitecto Perfeccionista",
            clinical_name: "Parálisis por Análisis / Aversión al Error",
            quote: "Si no va a salir perfecto, prefiero no hacerlo todavía."
        },
        content: {
            hook_text: "Te pasas más tiempo planificando y 'preparando el terreno' que haciendo el trabajo real. Tienes un ojo clínico para los detalles, pero esa misma visión te paraliza. A menudo escribes la primera frase de un correo y la borras diez veces. Vives con el miedo constante a que lo que produzcas no esté a la altura de tus estándares imposibles.",
            science_explanation: "Tu cerebro equipara el 'error' con el 'peligro social'. Tienes una hiperactivación del mecanismo de detección de errores en tu córtex cingulado anterior. Esto genera una ansiedad anticipatoria que actúa como un freno de mano puesto permanentemente.",
            intervention: {
                tool_name: "Estrategia del Borrador Basura",
                tool_type: "Técnica de Exposición",
                duration: "10 min",
                steps: [
                    "Declara la Intención: Di en voz alta 'Voy a hacer un trabajo mediocre ahora mismo'.",
                    "Pon el Cronómetro: Configura 10 minutos en tu reloj.",
                    "Escribe sin Borrar: Empieza a teclear o diseñar. Prohíbete usar la tecla de borrar o retroceso.",
                    "Guarda el Archivo: Titúlalo en mayúsculas 'BORRADOR SUCIO' para calmar tu perfeccionismo."
                ],
                why_it_works: "Desacopla el modo 'creador' del modo 'editor'. Al darte permiso explícito para hacerlo mal, eliminas la parálisis y generas inercia."
            }
        }
    },

    // --- RAMA 2: VOLUNTAD ---
    "dopamine_loop": {
        id: "dopamine_loop",
        profile: {
            marketing_name: "El Rehén de la Dopamina",
            clinical_name: "Desregulación del Circuito de Recompensa",
            quote: "Solo cinco minutos más... (y pasaron dos horas)."
        },
        content: {
            hook_text: "Conoces la sensación: entras a una red social o abres una bolsa de snacks para un 'alivio rápido', y de repente te encuentras atrapado en un bucle automático. Sientes una especie de trance 'zombi'. Al terminar, te queda una sensación de vacío y culpa por el tiempo o la energía desperdiciada.",
            science_explanation: "Tu Sistema de Recompensa (Núcleo Accumbens) ha sido secuestrado. Existe una brecha entre el 'Wanting' (el deseo compulsivo impulsado por la dopamina) y el 'Liking' (el placer real). Tu cerebro sigue prometiendo que el siguiente scroll traerá satisfacción, pero es una falsa predicción.",
            intervention: {
                tool_name: "Urge Surfing (Surf de Urgencia)",
                tool_type: "Mindfulness / ACT",
                duration: "3 min",
                steps: [
                    "Congela la Acción: Suelta el teléfono o la comida y di mentalmente 'Esto es un impulso'.",
                    "Escanea el Cuerpo: Cierra los ojos y localiza dónde sientes la ansiedad (pecho, estómago, manos).",
                    "Respira en la Tensión: Dirige tu respiración profunda directamente hacia esa sensación física.",
                    "Espera 90 Segundos: Mantente inmóvil observando cómo la intensidad sube y luego baja sola."
                ],
                why_it_works: "Rompe el condicionamiento pavloviano. Aprendes que los impulsos son eventos transitorios que puedes observar sin obedecer."
            }
        }
    },
    "short_term": {
        id: "short_term",
        profile: {
            marketing_name: "El Sesgo del Presente",
            clinical_name: "Descuento Hiperbólico",
            quote: "El 'Yo del Futuro' se encargará de eso. Pobre tipo."
        },
        content: {
            hook_text: "Vives en una batalla constante entre lo que sabes que debes hacer y lo que te apetece hacer ahora. Eres experto en la 'procrastinación hedonista'. Intelectualmente entiendes las consecuencias, pero emocionalmente, el futuro se siente tan lejano que no logra competir con la tentación inmediata.",
            science_explanation: "Sufres de Descuento Hiperbólico. Neurológicamente, cuando piensas en tu 'Yo del Futuro', se activan las mismas áreas cerebrales que cuando piensas en un extraño. Literalmente, le estás dejando el trabajo difícil a alguien que no conoces.",
            intervention: {
                tool_name: "Visualización Episódica Futura",
                tool_type: "Prospección Cognitiva",
                duration: "5 min",
                steps: [
                    "Cierra los Ojos: Viaja mentalmente al momento exacto donde la tarea ya está hecha.",
                    "Añade Textura: Nota detalles sensoriales específicos (qué hora es, qué luz hay, qué llevas puesto).",
                    "Ancla la Emoción: Siente en tu pecho el alivio o orgullo de ese momento futuro.",
                    "Abre los Ojos y Ejecuta: Dedica el primer paso de acción a esa versión futura de ti mismo."
                ],
                why_it_works: "Aumenta la 'vivacidad' del futuro, obligando a tu cerebro emocional a valorar la recompensa a largo plazo."
            }
        }
    },
    "impulsivity": {
        id: "impulsivity",
        profile: {
            marketing_name: "El Déficit de Freno",
            clinical_name: "Déficit de Control Inhibitorio",
            quote: "Primero actúo, luego pienso... y casi siempre me arrepiento."
        },
        content: {
            hook_text: "Tu velocidad de reacción es tu superpoder y tu maldición. A menudo dices cosas hirientes, mandas mensajes arriesgados o compras impulsivamente antes de que tu cerebro racional opine. Sientes que te falta un 'filtro'. La emoción te sube como un cohete y, para cuando te das cuenta, ya has cruzado la línea.",
            science_explanation: "Tienes un desafío en el Control Inhibitorio. Tu sistema límbico (emociones rápidas) es más veloz que tu sistema 'Top-Down' (control racional). La señal de '¡Frena!' de tu lóbulo frontal llega milisegundos tarde.",
            intervention: {
                tool_name: "La Pausa Sagrada (STOP)",
                tool_type: "Regulación Emocional",
                duration: "1-2 min",
                steps: [
                    "S (Stop): Congela tu cuerpo totalmente. No muevas ni un dedo, no abras la boca.",
                    "T (Take a breath): Inhala profundo por la nariz y suelta el aire muy lento por la boca.",
                    "O (Observe): Nombra la emoción que sientes (ej: 'Tengo rabia y quiero gritar').",
                    "P (Proceed): Haz lo opuesto a lo que te pide la emoción o espera 5 minutos antes de actuar."
                ],
                why_it_works: "Introduce artificialmente el tiempo que tu cerebro no te da. Esos segundos permiten que la sangre vuelva al córtex prefrontal."
            }
        }
    },

    // --- RAMA 3: ÁNIMO ---
    "negative_triad": {
        id: "negative_triad",
        profile: {
            marketing_name: "La Lente Oscura",
            clinical_name: "Tríada Cognitiva Negativa",
            quote: "No importa lo que haga, tengo la certeza de que saldrá mal."
        },
        content: {
            hook_text: "Llevas puestas unas gafas invisibles que tiñen todo de gris. Tu diálogo interno es un crítico implacable: si algo sale mal, es 'culpa tuya'; si algo sale bien, 'fue suerte'. Sientes una desesperanza de fondo y una convicción pesada de que el futuro será una repetición de tus errores pasados.",
            science_explanation: "Estás atrapado en la 'Tríada de Beck'. Tu mente filtra lo positivo (lo ignora) y magnifica lo negativo, reforzando un circuito neural de indefensión aprendida.",
            intervention: {
                tool_name: "El Abogado del Diablo",
                tool_type: "Terapia Cognitivo-Conductual",
                duration: "8 min",
                steps: [
                    "Atrapa el Pensamiento: Escribe en papel la frase exacta que te está hiriendo.",
                    "Busca Pruebas: Escribe debajo 3 hechos objetivos (no sentimientos) que contradigan esa frase.",
                    "Tacha la Mentira: Cruza con una línea fuerte el pensamiento original.",
                    "Reescribe la Verdad: Redacta una nueva frase que incluya los hechos reales que encontraste."
                ],
                why_it_works: "Al desafiar los pensamientos con evidencia, debilitas las conexiones neuronales del pesimismo."
            }
        }
    },
    "emptiness": {
        id: "emptiness",
        profile: {
            marketing_name: "El Vacío del Éxito",
            clinical_name: "Crisis de Sentido / Desconexión Axiológica",
            quote: "Llegué a la cima de la montaña y descubrí que no había nada allí."
        },
        content: {
            hook_text: "Desde fuera, parece que lo tienes todo bajo control. Cumples objetivos y tachas tareas. Pero por dentro, sientes un eco hueco. Cuando logras una meta, la alegría dura cinco minutos. Sientes que estás corriendo en una cinta: mucho esfuerzo, pero sin llegar a ningún lugar que llene el alma.",
            science_explanation: "Experimentas una desconexión entre tus 'Metas' (externas) y tus 'Valores' (internos). Tu sistema de recompensa se ha adaptado (Adaptación Hedónica). La sensación de vacío indica que vives una vida funcional, pero no significativa.",
            intervention: {
                tool_name: "La Brújula de Valores",
                tool_type: "Terapia de Aceptación y Compromiso",
                duration: "10 min",
                steps: [
                    "Nombra el Verbo: Elige una cualidad que quieras encarnar hoy (ej: 'Ayudar', 'Aprender').",
                    "Ignora el Resultado: Olvida la meta final o el éxito externo por un momento.",
                    "Define la Micro-Acción: Elige una tarea de 5 minutos que te permita usar ese verbo.",
                    "Ejecuta con Intención: Haz la tarea concentrándote solo en 'ser' ese valor mientras actúas."
                ],
                why_it_works: "Cambia el foco del 'tener' al 'ser'. Vivir alineado con valores genera propósito intrínseco."
            }
        }
    },
    "languishing": {
        id: "languishing",
        profile: {
            marketing_name: "El Piloto Automático",
            clinical_name: "Languidez (Languishing)",
            quote: "No estoy deprimido, pero tampoco estoy vivo. Simplemente... estoy."
        },
        content: {
            hook_text: "Si te preguntan cómo estás, la respuesta honesta sería 'Meh'. No estás en crisis profunda, pero tampoco sientes entusiasmo. Los días se fusionan en una masa gris. Estás funcionando en 'modo ahorro de energía', viendo la vida pasar a través de un cristal empañado.",
            science_explanation: "Esto se llama Languidez. Es la ausencia de bienestar sin enfermedad. Ocurre por falta de 'Flow'. Tu cerebro no recibe suficientes desafíos estimulantes, entrando en letargo defensivo.",
            intervention: {
                tool_name: "Diseño de Micro-Flujos",
                tool_type: "Psicología Positiva / Flow",
                duration: "15-20 min",
                steps: [
                    "Elige el Reto: Selecciona una actividad manual o intelectual que requiera concentración total.",
                    "Elimina Interrupciones: Pon el teléfono en modo 'No Molestar' en otra habitación.",
                    "Sube el Nivel: Asegúrate de que la tarea sea un poco más difícil de lo habitual.",
                    "Cronometra 20 Minutos: Trabaja sin parar hasta que suene la alarma."
                ],
                why_it_works: "El Flow es el antídoto de la languidez. Reactiva la dopamina al equilibrar desafío y habilidad."
            }
        }
    },

    // --- RAMA 4: ANSIEDAD ---
    "panic": {
        id: "panic",
        profile: {
            marketing_name: "La Alerta Roja",
            clinical_name: "Hiperactivación Amigdalina / Pánico",
            quote: "Siento que me voy a morir o a volver loco, y nadie lo nota por fuera."
        },
        content: {
            hook_text: "Todo va bien y, de repente, tu cuerpo enciende todas las alarmas. El corazón te late en la garganta, te falta el aire y sientes una presión que te aterra. Tu mente grita: '¿Me está dando un infarto?'. Vives con miedo a tus propias sensaciones físicas.",
            science_explanation: "Tu amígdala se ha disparado por error, activando una respuesta masiva de 'Lucha o Huida'. Estás inundado de adrenalina. La falta de aire es paradójica: estás hiperventilando (tienes demasiado oxígeno), lo que constriñe tus vasos sanguíneos.",
            intervention: {
                tool_name: "El Suspiro Fisiológico",
                tool_type: "Biohack Respiratorio / Neurociencia",
                duration: "2 min",
                steps: [
                    "Inhala Profundo: Toma aire por la nariz llenando los pulmones.",
                    "Doble Inhalación: Haz una segunda inhalación corta y brusca (sniff) para llenar al tope.",
                    "Exhala Lento: Suelta el aire por la boca muy despacio (como soplando una pajita) hasta vaciarte.",
                    "Repite 3 Veces: Haz la secuencia exacta y luego respira normal."
                ],
                why_it_works: "Es el interruptor mecánico más rápido para frenar el sistema simpático (estrés) y activar el parasimpático (calma)."
            }
        }
    },
    "gad": {
        id: "gad",
        profile: {
            marketing_name: "El Guionista de Catástrofes",
            clinical_name: "Ansiedad Generalizada",
            quote: "¿Y si pasa algo malo? Mejor me preocupo ahora por si acaso."
        },
        content: {
            hook_text: "Tu mente es una máquina de viajar a los peores futuros posibles. Antes de que ocurra un evento, ya has imaginado diez formas en las que podría salir mal. Te cuesta relajarte porque crees inconscientemente que preocuparte te 'prepara' o protege.",
            science_explanation: "Sufres de Intolerancia a la Incertidumbre. Tu cerebro sobreactiva la 'Red Neuronal por Defecto', rumiando para intentar controlar lo incontrolable. La preocupación actúa como un refuerzo negativo adictivo.",
            intervention: {
                tool_name: "Tiempo de Preocupación Agendado",
                tool_type: "Control de Estímulos / TCC",
                duration: "15 min (Diferido)",
                steps: [
                    "Anota la Alerta: Cuando surja la preocupación, escríbela en un papel inmediatamente.",
                    "Posponla Verbalmente: Di en voz alta 'Pensaré en esto a las [Tu hora agendada]'.",
                    "Vuelve al Presente: Regresa a tu actividad anterior ignorando el pensamiento.",
                    "Procesa a la Hora: Si a la hora agendada sigue siendo importante, dedica 15 minutos a solucionarlo."
                ],
                why_it_works: "Rompe el hábito de la rumiación. Le enseñas a tu cerebro que las preocupaciones tienen un horario acotado."
            }
        }
    },
    "burnout": {
        id: "burnout",
        profile: {
            marketing_name: "La Batería Agotada",
            clinical_name: "Síndrome de Burnout",
            quote: "Estoy tan cansado que ni siquiera puedo descansar."
        },
        content: {
            hook_text: "No es solo cansancio, es un agotamiento que te llega hasta los huesos. Te sientes cínico y extrañamente ineficaz. Aunque estás drenado, no puedes parar ('Tired but wired'). El sueño no te repara y sientes que funcionas por pura inercia mecánica.",
            science_explanation: "Has acumulado demasiada 'Carga Alostática' (desgaste por estrés crónico). Has perdido la flexibilidad para cambiar del Sistema Simpático (gasto) al Parasimpático (recuperación). Tu batería no está rota, pero el cable de carga está desconectado.",
            intervention: {
                tool_name: "Protocolo NSDR",
                tool_type: "Neurociencia Restaurativa / Yoga Nidra",
                duration: "10-20 min",
                steps: [
                    "Túmbate Boca Arriba: Ponte en el suelo o cama y colócate auriculares.",
                    "Inmoviliza el Cuerpo: Comprométete a no moverte nada durante la sesión.",
                    "Reproduce el Audio: Dale play a una guía de 'NSDR' o 'Yoga Nidra'.",
                    "Sigue la Voz: Mueve solo tu atención mental por las partes del cuerpo que indique el audio."
                ],
                why_it_works: "20 minutos de NSDR pueden reponer neurotransmisores como la dopamina más eficientemente que una siesta."
            }
        }
    },

    // --- RAMA 5: SOCIAL ---
    "impostor": {
        id: "impostor",
        profile: {
            marketing_name: "El Impostor Silencioso",
            clinical_name: "Fenómeno del Impostor",
            quote: "Me aplauden, pero yo sé que en realidad no sé nada."
        },
        content: {
            hook_text: "Vives con el temor a ser 'descubierto'. Aunque tienes logros, sientes que eres un fraude. Atribuyes tus éxitos a la suerte o a que 'engañaste' bien a los demás. Cada nuevo reto no es una oportunidad, sino una amenaza que podría revelar tu incompetencia.",
            science_explanation: "Sufres una falla en la 'Internalización del Éxito'. Tu cerebro disocia tus logros de tus habilidades. Esto genera un ciclo donde trabajas en exceso para evitar ser descubierto, aumentando la ansiedad.",
            intervention: {
                tool_name: "La Carpeta de Evidencia",
                tool_type: "Reestructuración Cognitiva",
                duration: "5 min",
                steps: [
                    "Crea el Archivo: Abre una carpeta física o una nota digital nueva.",
                    "Inserta la Prueba: Guarda una captura de pantalla, email o foto de un logro real.",
                    "Lee en Voz Alta: Lee el elogio o logro como si hablaran de otra persona.",
                    "Di la Verdad: Afirma en voz alta 'Yo generé este resultado con mi habilidad'."
                ],
                why_it_works: "Obliga al cerebro a procesar datos objetivos que contradicen la narrativa emocional del fraude."
            }
        }
    },
    "pleasing": {
        id: "pleasing",
        profile: {
            marketing_name: "El Complaciente Crónico",
            clinical_name: "Esquema de Autosacrificio",
            quote: "Digo que sí cuando mi cuerpo grita que no."
        },
        content: {
            hook_text: "Tu radar emocional está sintonizado hacia afuera: detectas las necesidades de los demás antes que las tuyas. Te cuesta decir 'No' porque sientes que rechazar un pedido es rechazar a la persona. Terminas haciendo favores que te drenan, acumulando resentimiento.",
            science_explanation: "Tienes un esquema de Autosacrificio. Tu cerebro asocia tu 'valía' con tu 'utilidad'. Poner límites activa miedo al rechazo, porque evolutivamente, el rechazo de la tribu significaba peligro.",
            intervention: {
                tool_name: "El Sándwich del NO",
                tool_type: "Entrenamiento en Asertividad",
                duration: "1 min",
                steps: [
                    "Valida Primero: Di 'Gracias por pensar en mí' o 'Qué buena propuesta'.",
                    "Di NO Claro: Di 'No tengo disponibilidad ahora' (sin dar explicaciones largas).",
                    "Ofrece Alternativa: Di 'Pero quizás X pueda ayudarte' o 'Te deseo suerte'.",
                    "Haz Silencio: Cierra la boca inmediatamente después. No te justifiques."
                ],
                why_it_works: "Te da una estructura segura para establecer límites, protegiendo la relación y tu tiempo simultáneamente."
            }
        }
    },
    "control": {
        id: "control",
        profile: {
            marketing_name: "El Héroe Solitario",
            clinical_name: "Dificultad de Delegación",
            quote: "Si quieres que algo salga bien, tienes que hacerlo tú mismo."
        },
        content: {
            hook_text: "Eres eficiente, pero estás al borde del colapso. Tu mantra es 'tardo menos haciéndolo yo que explicándolo'. No confías en que nadie cumpla tus estándares, así que cargas el peso del mundo. Te quejas de que nadie ayuda, pero micro-gestionas a quien lo intenta.",
            science_explanation: "Operas bajo la 'Ilusión de Control'. Crees que delegar es perder calidad, cuando en realidad estás creando un cuello de botella (tú mismo) que impide el crecimiento y garantiza tu Burnout.",
            intervention: {
                tool_name: "La Regla del 70%",
                tool_type: "Gestión Conductual / Liderazgo",
                duration: "Decisión mental",
                steps: [
                    "Identifica la Tarea: Elige algo operativo que te esté robando tiempo.",
                    "Evalúa al Delegado: Pregunta '¿Puede alguien hacerlo al 70% de mi calidad?'.",
                    "Entrega el Mando: Si es sí, asigna la tarea con instrucciones claras.",
                    "Átate las Manos: Prohíbete corregir o intervenir a menos que haya un error crítico."
                ],
                why_it_works: "Rebaja el estándar de 'perfección imposible' a 'suficiencia operativa' para recuperar tu tiempo estratégico."
            }
        }
    }
};
