import {calculateInvestmentResults, formatter} from '../util/investment.js'

const Results =({userInput})=>{
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear- resultsData[0].interest-resultsData[0].annualInvestment
    return(
        <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
       <tbody>
        {resultsData.map((item) => {
           

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>
                  {formatter.format(
                    item.valueEndOfYear -
                    initialInvestment -
                      item.annualInvestment * item.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    initialInvestment +
                      item.annualInvestment * item.year
                  )}
                </td>
              </tr>
            );
          })}
</tbody>
      </table>
  );
};

export default Results;