package com.todoapp;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
class todotest {
    @Test
    void testAddTask(){
        todoApp todo2 = new todoApp();
        todo2.addTask("Test task 1");
        todo2.addTask("test task 2");

        List<String> tasks=todo2.getTasks();
        assertEquals(2, tasks.size());
        assertEquals("Test task 1: ",tasks.get(0));
        assertEquals("test task 2: ", tasks.get(1));

    }

    @Test
    void testRemoveTask(){
        todoApp todo2 = new todoApp();
        todo2.addTask("Task to be removed");
        todo2.removeTask(0);
        List<String > tasks = todo2.getTasks();
        assertTrue(tasks.isEmpty());
    }

    @Test
    void testViewTasks(){
        todoApp todo2 = new todoApp();
        todo2.addTask("View Task 1");
        todo2.addTask("View Task 2");

        assertDoesNotThrow(todo2::viewTasks);
    }
}
