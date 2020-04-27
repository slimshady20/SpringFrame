package com.occamsrazor.web.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

public class FileTest {
	public final static String FILE_PATH = "C:\\Users\\bit\\spring-workspace\\occamsrazor\\src\\main\\resources\\static\\member\\";
	public static void main(String[] args) {
		try {
			File file = new File(FILE_PATH+"list.txt");
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(new FileWriter(file, true));
			BufferedReader reader = new BufferedReader(new FileReader(file));
			List<String> list = new ArrayList<>();
			while(true) {
				switch(JOptionPane.showInputDialog("0.종료 1.쓰기 2.읽기")) {
				case "0": return;
				case "1": 
					String message = JOptionPane.showInputDialog("메시지 입력");
					System.out.println(message);
					writer.write(message);
					writer.newLine();
					writer.flush();
					break;
				case "2": 
					while((message = reader.readLine()) != null) {
						list.add(message+"/");  //list는 한줄이니까 토큰걸어주자
					}
					JOptionPane.showMessageDialog(null, list);
					reader.close();
					break;
				}
			}
		} catch(Exception e) {
			
		}
	}

}
