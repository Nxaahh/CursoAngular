import { Component, OnInit } from '@angular/core';
import { Task,TaskPriority,TaskStatus} from '../../../models/task.models';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  taskList: Task[] = [
    new Task(1, "Implementar autentificación", "Configurar autentificación", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-01"), new Date("2024-11-20"), false),
    new Task(2, "Diseñar base de datos", "Crear esquemas para las tablas principales", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-11-05"), new Date("2024-11-25"), false),
    new Task(3, "Configurar Docker", "Instalar y configurar contenedores en el servidor", TaskPriority.MEDIUM, TaskStatus.IN_PROGRESS, new Date("2024-11-10"), new Date("2024-11-22"), false),
    new Task(4, "Implementar API REST", "Crear endpoints para la aplicación", TaskPriority.HIGH, TaskStatus.PENDING, new Date("2024-11-07"), new Date("2024-11-30"), false),
    new Task(5, "Diseñar interfaz de usuario", "Crear prototipos para la app web", TaskPriority.MEDIUM, TaskStatus.IN_PROGRESS, new Date("2024-11-08"), new Date("2024-11-28"), false),
    new Task(6, "Configurar seguridad", "Implementar SSL y otras medidas de seguridad", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-12"), new Date("2024-12-01"), true),
    new Task(7, "Escribir documentación técnica", "Preparar manuales y guías de usuario", TaskPriority.LOW, TaskStatus.IN_PROGRESS, new Date("2024-11-15"), new Date("2024-12-05"), false),
    new Task(8, "Realizar pruebas unitarias", "Escribir y ejecutar tests para el código", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-11-14"), new Date("2024-12-03"), false),
    new Task(9, "Optimizar rendimiento", "Mejorar tiempos de respuesta del sistema", TaskPriority.MEDIUM, TaskStatus.IN_PROGRESS, new Date("2024-11-20"), new Date("2024-12-10"), false),
    new Task(10, "Integrar Odoo con base de datos", "Configurar Odoo en Docker y conectarlo con PostgreSQL", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-18"), new Date("2024-12-01"), false),
    new Task(11, "Configurar backups automáticos", "Establecer copias de seguridad diarias", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-11-19"), new Date("2024-12-07"), false),
];

}
