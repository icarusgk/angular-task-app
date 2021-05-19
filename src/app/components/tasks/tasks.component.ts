import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service"


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // An empty array
  tasks: Task[] = [];

  // In order to use a service you have to add it as a provider
  // into the constructor

  constructor(private taskService: TaskService) { }

  // Now we should be able to say 'this.taskService.getTasks();'
  // Without observables
  // ngOnInit(): void {
  //   this.tasks = this.taskService.getTasks();
  // }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // Just a single object, not the entire array
  // Delete from the UI

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
  
}
