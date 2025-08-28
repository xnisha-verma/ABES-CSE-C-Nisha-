package com.todoapp;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
class todoApp {
  private ArrayList<String> tasks=new ArrayList<>();

    public void addTask(String task){
        tasks.add(task);
        System.out.println("Task addes: "+task);
    }

    public void removeTask(int index){
        if(index>=0&&index<tasks.size()){
            System.out.println("Task removed: "+tasks.remove(index));
        }else{
            System.out.println("No task to remove");
        }
    }

    public void viewTasks(){
        if(tasks.isEmpty()){
            System.out.println("No tasks available");
        }else{
            System.out.println("Your tasks: ");
            for(int i=0;i<tasks.size();i++){
                System.out.println((i+1)+". "+tasks.get(i));
            }
        }
    }

    public List<String> getTasks(){
        return new ArrayList<>(tasks);
    }
}
public class todo{
    public static void main(String[] args) {
        todoApp todo2 = new todoApp();
        Scanner s=new Scanner(System.in);

        int choice;
        System.out.println("Welcome to the To-Do list app!");
        do{
            System.out.println("\nMenu");
            System.out.println("1. Add Task");
            System.out.println("2. Remove Task");
            System.out.println("3. View Tasks");
            System.out.println("4. Exit");
            System.out.println("Enter your choice: ");
            choice= s.nextInt();
            s.nextLine();

            switch(choice){
                case 1:
                    System.out.println("enter a task to add: ");
                    String task=s.nextLine();
                    todo2.addTask(task);
                    break;
                case 2:
                    System.out.println("enter the number to remove: ");
                    int index= s.nextInt()-1;
                    todo2.removeTask(index);
                    break;
                case 3:
                    todo2.viewTasks();
                    break;
                case 4:
                    System.out.println("exiting the app. Goodbye!!!");
                    break;
                default:
                    System.out.println("invalid choice. please try again,");
            }
        }while(choice!=4);
        s.close();
    }
}

