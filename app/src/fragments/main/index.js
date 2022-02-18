import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  // CategoryScale,
  // LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import './style.css';

// Static settings
ChartJS.defaults.color = 'rgba(255, 255, 255, 1)';
ChartJS.defaults.borderColor = '#029c6e';
ChartJS.register(
  RadialLinearScale,
  // CategoryScale,
  // LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


export default (class MainFragment extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-fragment">
                <header className="rx-bg-dark-1">
                    <div className="container">
                        <h1>Soluciones Inform&aacute;ticas</h1>
                        <h4><strong><i>altamente seguras</i></strong> y profesionales</h4>
                    </div>
                </header>

                <div className="py-5 rx-bg-dark-1">
                    <div className="container pt-4">
                        <div className="text-center">
                            <h1>
                                Servicios destacados
                            </h1>
                            <p className="mb-5">
                                DevelR0X se posiciona un paso adelante y combina
                                distintas disciplinas para prevenir vulnerabilidades
                                y construir soluciones altamente seguras.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 px-0 px-md-4 pb-4">
                                <div className="text-center">
                                    <p>
                                        <i aria-hidden="true" className="fa fa-code fa-4x"></i>
                                    </p>
                                    <h4 className="mb-3">Soluciones aplicativas</h4>
                                    <p>
                                        Creamos, mantenemos, integramos y analizamos
                                        aplicaciones altamente escalables y seguras.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Desarrollo de Software
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Desarrollo e implementación de Integraciones
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Despliegue y configuraciones
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Seguridad Aplicativa
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Capacitación de Desarrollo e Implementación Segura
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Consultoría
                                        </span>
                                    </p>
                                    <p className="ps-3 mb-0">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 px-0 px-md-4 pb-4">
                                <div className="text-center">
                                    <p>
                                        <i aria-hidden="true" className="fa fa-wifi fa-4x"></i>
                                    </p>
                                    <h4 className="mb-3">Infraestructura, Redes y Sistemas</h4>
                                    <p>
                                        Consultoría y Revisiones de seguridad a
                                        infraestructura, arquitectura, código fuente
                                        y caja gris/negra.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Implementación y configuración
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Seguridad Perimetral y Sistemas
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Capacitación
                                        </span>
                                    </p>
                                    <p className="ps-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1">
                                        <i className="fa fa-caret-right me-3" aria-hidden="true"></i>
                                        <span className="rx-text-primary">
                                            Consultoría
                                        </span>
                                    </p>
                                    <p className="ps-3 mb-0">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Morbi neque nisl, porta in
                                        lectus a, tempus eleifend arcu. Cras
                                        tincidunt at diam vel dapibus. Nullam
                                        efficitur fringilla semper.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5 bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <Radar
                                    className="radar-chart"
                                    options={{
                                        scale: {
                                            min: -1,
                                            max: 100
                                        },
                                        plugins: {
                                            legend: {
                                                labels: {
                                                    font: {
                                                        size: 16,
                                                        family: 'Open Sans'
                                                    }
                                                }
                                            }
                                        },
                                        scales: {
                                            r: {
                                                pointLabels: {
                                                    font: {
                                                        size: 16,
                                                        family: 'Open Sans'
                                                    }
                                                },
                                                ticks: {
                                                    display: false
                                                }
                                            }
                                        }
                                    }}
                                    data={{
                                        labels: [
                                            'Experiencia',
                                            'Conocimiento',
                                            'Habilidad',
                                            'Velocidad',
                                            'Responsabilidad',
                                            'Ética',
                                        ],
                                        datasets: [
                                            {
                                                label: 'Colaboradores técnicos',
                                                backgroundColor: 'rgba(129, 212, 26, 0.2)',
                                                borderColor: 'rgba(129, 212, 26, 1)',
                                                data: [100, 95, 98, 70, 100, 100],
                                            },
                                            {
                                                label: 'Colaboradores comerciales',
                                                backgroundColor: 'rgba(212, 129, 26, 0.2)',
                                                borderColor: 'rgba(212, 129, 26, 1)',
                                                data: [100, 70, 70, 100, 100, 100],
                                            }
                                        ]
                                    }} />
                            </div>
                            <div className="col-md-6">
                                <h1>Ciberseguridad Defensiva y Ofensiva</h1>
                                <p className="lead">
                                    Nuestros clientes nos elijen por nuestra capacidad,
                                    experiencia y alto conocimiento en tecnolog&iacute;as
                                    transaccionales, financieras y de alto impacto.
                                </p>
                                <p>
                                    DevelR0X se posiciona un paso adelante y combina
                                    distintas disciplinas para identificar y prevenir las
                                    debilidades y agujeros de seguridad de su negocio,
                                    creamos planes de desarrollo, mitigación y corrección
                                    oportunos para protegerlo de las amenazas de Internet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className="container my-4 py-4 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            Software
                                desarrollo
                                integraciones
                                despliegue
                                seguridad
                                capacitación
                                consultoría
                        </div>
                        <div className="col-md-6">
                            Infraestructura
                                implementación
                                seguridad
                                capacitación
                                consultoría
                        </div>
                        cumplimiento normativo
                            iso ...
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            Prevención
                        </div>
                        <div className="col-md-3">
                            Detección
                        </div>
                        <div className="col-md-3">
                            Soluciones
                        </div>
                        <div className="col-md-3">
                            Cumplimiento
                        </div>
                    </div>
                </div>
                */}
            </div>
        );
    }
})
