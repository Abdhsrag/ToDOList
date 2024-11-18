import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ToDoTask {
  id: number;
  task: string;
  completed: boolean;
}
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  todoList: ToDoTask[] = [];
  newTask: string = '';
  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newItem: ToDoTask = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };
      this.todoList.push(newItem);
      this.newTask = '';
    }

  }

  complete(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  delete(index: number): void {
    this.todoList = this.todoList.filter((item, i) => i !== index);
  }

}
