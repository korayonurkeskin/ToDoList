"""To Do List"""

class Task:
    def __init__(self, name, state):
        self.name = name
        self.state = False

class ToDoList:
    def __init__(self):
        self.max = 5
        self.tasks = []

    def add(self, task):
        if len(self.tasks) < self.max:
            self.tasks.append(task)
            return True
        return False

    def remove(self, task):
        if task in self.tasks:
            self.tasks.remove(task)
            return True
        return False