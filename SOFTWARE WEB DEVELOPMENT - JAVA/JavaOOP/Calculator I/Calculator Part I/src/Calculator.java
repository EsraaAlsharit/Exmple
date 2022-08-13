
public class Calculator {

	public double OperandOne;
	public double OperandTwo;
	public String Operation;
	public double Results;

	public double getOperandOne() {
		return OperandOne;
	}

	public void setOperandOne(double operandOne) {
		OperandOne = operandOne;
	}

	public double getOperandTwo() {
		return OperandTwo;
	}

	public void setOperandTwo(double operandTwo) {
		OperandTwo = operandTwo;
	}

	public String getOperation() {
		return Operation;
	}

	public void setOperation(String operation) {
		Operation = operation;
	}

	public void performOperation() {

		switch (this.Operation) {
			case "+":
				this.Results = OperandOne + OperandTwo;
				break;
			case "-":
				this.Results = OperandOne - OperandTwo;
				break;
			case "x":
				this.Results = OperandOne * OperandTwo;
				break;
			case "/":
				this.Results = OperandOne / OperandTwo;
				break;

		}
	}

	public double getResults() {
		return Results;
	}

	public void setResults(double results) {
		Results = results;
	}

}
