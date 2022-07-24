
public class Calculator {

    public double OperandOne;
    public String OperationOne;
    public double OperandTwo;
    public String OperationTwo;

    private boolean operand1Set = false;
    private boolean operand2Set = false;
    private boolean operator1Set = false;
    private boolean operator2Set = false;
    public double Results;

    public double getOperandOne() {
        return OperandOne;
    }

    public void setOperandOne(double operandOne) {
        OperandOne = operandOne;
        operand1Set = true;
    }

    public double getOperandTwo() {
        return OperandTwo;
    }

    public void setOperandTwo(double operandTwo) {
        OperandTwo = operandTwo;
        operand2Set = true;
    }

    public String getOperationOne() {
        return OperationOne;
    }

    public void setOperationOne(String operationOne) {
        OperationOne = operationOne;
        operator1Set = true;
    }

    public String getOperationTwo() {
        return OperationTwo;
    }

    public void setOperationTwo(String operationTwo) {
        OperationTwo = operationTwo;
        operator2Set = true;
    }

    public void performOperation(double num) {

        if (this.operand1Set) {
            switch (this.OperationOne) {
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
        } else {
            System.out.println();
        }

    }

    public double getResults() {
        return Results;
    }

    public void setResults(double results) {
        Results = results;
    }

}
