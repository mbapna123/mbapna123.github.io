

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.*;
import java.net.*;
import java.util.Arrays;
import java.io.*;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class MadLib extends HttpServlet {
	String[] truearray;
	private static final long serialVersionUID = 1L;

    public MadLib() {
    }

 public int[] generatearray(String arr) {
//		System.out.println(arr);
		truearray=arr.split("\\s");
//		for (int iter=0; iter<truearray.length;iter++) {
//			System.out.print(" "+truearray[iter]+" ");
//		}
		int length=truearray.length;
//		System.out.println(length);
		double arrlength=(truearray.length)/4.0;
//		System.out.println(arrlength);
		int randn=(int) Math.ceil(arrlength)-1;
		int q=0;
		int[] numbarr=new int[randn+1];
//		System.out.println(randn);
		for (int i=0; i<=randn;i++) {
		double rand=Math.random()*(length);
//		System.out.println(" "+ rand+ " ");
		int randadjusted=(int) Math.ceil(rand)-1;
//		System.out.println(randadjusted);
//		System.out.print(" "+ randadjusted+ " ");
//		System.out.print(" "+ q+" ");
		numbarr[q]= randadjusted;
		System.out.print(" "+numbarr[q]+" ");
		q++;
		}
		System.out.println(" ");
		int[] arrmodified=modifyarray(numbarr,length,truearray);
		System.out.println(" ");
		for (int iter=0; iter<arrmodified.length;iter++) {
			System.out.print(" " + arrmodified[iter]+ " ");
		}
		return arrmodified;
 }


 public int[] modifyarray(int[] arri,int len,String[] arrstring){
//	 System.out.println(arri.length);
//	 for (int iter=0; iter<arri.length;iter++) {
//			System.out.print(" "+arri[iter]+" ");
//		}
String[] invalidwords=new String[] {"crack", "direct", "flat", "follow", "order", "pull", "stand","address", "bank", "crash", "end", "figure", "find", "flip", "flush", "force", "frame", "hang", "high", "kill", "land", "loose", "match", "number", "piece", "position", "present", "quarter", "rack", "rest", "rough", "scale", "score", "service", "shell", "shot", "solid", "split", "stamp", "still", "tender", "tie","break","cut","run","play","make","clear","draw","give","hold","set"};
		for (int i=0; i<arri.length;i++) {
		int validity=0;
		for (int itera=0; itera<invalidwords.length; itera++) {
			if (invalidwords[itera].equalsIgnoreCase(arrstring[arri[i]])){
				validity=1;
		}}
			if (validity==1||arrstring[arri[i]].equalsIgnoreCase("the")|| arrstring[arri[i]].equalsIgnoreCase("this") ||arrstring[arri[i]].equalsIgnoreCase("that")||arrstring[arri[i]].equalsIgnoreCase("these")||arrstring[arri[i]].equalsIgnoreCase("those")||arrstring[arri[i]].equalsIgnoreCase("than")||arrstring[arri[i]].equalsIgnoreCase("into")||arrstring[arri[i]].equalsIgnoreCase("")||arrstring[arri[i]].equalsIgnoreCase("your")||arrstring[arri[i]].equalsIgnoreCase("his")||arrstring[arri[i]].equalsIgnoreCase("her")||arrstring[arri[i]].equalsIgnoreCase("were")||arrstring[arri[i]].equalsIgnoreCase("it's")||arrstring[arri[i]].equalsIgnoreCase("such")||arrstring[arri[i]].equalsIgnoreCase("rather")||arrstring[arri[i]].equalsIgnoreCase("quite")||arrstring[arri[i]].equalsIgnoreCase("other")||arrstring[arri[i]].equalsIgnoreCase("another")||arrstring[arri[i]].equalsIgnoreCase("all")||arrstring[arri[i]].equalsIgnoreCase("both")||arrstring[arri[i]].equalsIgnoreCase("half")||arrstring[arri[i]].equalsIgnoreCase("does")||arrstring[arri[i]].equalsIgnoreCase("either")||arrstring[arri[i]].equalsIgnoreCase("each")||arrstring[arri[i]].equalsIgnoreCase("knew")||arrstring[arri[i]].equalsIgnoreCase("animal")||arrstring[arri[i]].equalsIgnoreCase("state")||arrstring[arri[i]].equalsIgnoreCase("it")||arrstring[arri[i]].equalsIgnoreCase("are")||arrstring[arri[i]].length()<3) {
//				System.out.println(arrstring[arri[i]]);
				double temp=Math.random()*(len);
//				System.out.println(temp);
				arri[i]=(int) Math.ceil(temp)-1;
//				System.out.println(" ");
//				System.out.println(arri[i]);
				return modifyarray(arri,len,arrstring);
			}
			for (int r=0; r<arri.length;r++) {
				if (r==i) {
				break;
				}
//				System.out.println(" "+arrstring[arri[i]]+ " ");
				if (arri[i]==arri[r]) {
//					System.out.println(" "+ arri[i] + " ");
//					System.out.println(" "+ arri[r]+ " ");
					double temp=Math.random()*(len+1);
					arri[i]=(int) Math.ceil(temp)-1;
					return modifyarray(arri,len,arrstring);
				}
			}
		}
		return arri;
		}


 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String arraymadlib= (String) request.getParameter("madlibarray");
//		System.out.println(arraymadlib);
		if (null!=arraymadlib) {
//		System.out.println("hi");
			truearray=arraymadlib.split("\\s");
			String[] arfinal=new String[truearray.length];
			try {
				int[] finalarray=generatearray(arraymadlib);
			String[] newarrray=new String[finalarray.length];
			String[] newarrraytype=new String[finalarray.length];
			for (int i=0;i<finalarray.length;i++) {
				JsonFactory factory = new JsonFactory();
				String urlchosen="https://wordsapiv1.p.mashape.com/words/"+truearray[finalarray[i]];
				String test = "";
				try {
					HttpResponse<JsonNode> responsetwo = Unirest.get(urlchosen)
							.header("X-Mashape-Key", "9apAuXwqmWmshR3oQ6OxXd9JkzVLp13UuhBjsnQhCcdTxQyP9r")
							.header("Accept", "application/json")
							.asJson();
					String myObj = responsetwo.getBody().getObject().toString();
					JSONObject myObj2=responsetwo.getBody().getObject();
					try {
			        	JSONArray myObj3=myObj2.getJSONArray("results");
			        	JSONObject results = myObj3.getJSONObject(0);
			        	String numberr2=results.getString("partOfSpeech");
			        	JSONArray my4 = results.getJSONArray("typeOf");
			        	if (!numberr2.equals("noun")) {
			        		String numberr=numberr2;
			        		newarrray[i] = numberr;
			        	}
			        	else {
			        	String numberr=my4.getString(0);
			            newarrray[i] = numberr;
			        	}}
			        	catch(Exception er) {
			        		try {
					        	JSONArray myObj4=myObj2.getJSONArray("results");
					        	JSONObject resultsi = myObj4.getJSONObject(0);
					        	String numberr2=resultsi.getString("partOfSpeech");
					            newarrray[i] = numberr2;
					            test=numberr2;
					         System.out.println(test);
					        	}
					        	catch(Exception errr) {
					        		newarrray[i]="0";
					        	}
			        	}
				}
				catch (UnirestException e) {
					// TODO Auto-generated catch block
					newarrray[i]="pronoun";
				}
			for (int iter=0; iter<newarrray.length;iter++) {
				System.out.print(" " +newarrray[iter]+ " ");
			}
			System.out.println("   f  ");
			for (int iter=0; iter<finalarray.length;iter++) {
				System.out.print(" " + finalarray[iter]+ " ");
			}
			}
			response.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));
            response.setHeader("Access-Control-Allow-Headers", "Authorization");
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
			response.setHeader("Content-Type", "text/html");
			PrintWriter writer = response.getWriter();
			writer.println(Arrays.toString(finalarray));
			writer.println(Arrays.toString(newarrray));
}
			catch(ArrayIndexOutOfBoundsException exception) {
				response.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));
	            response.setHeader("Access-Control-Allow-Headers", "Authorization");
				response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
				PrintWriter writer = response.getWriter();
				writer.println("0");
			}
			}}




	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
