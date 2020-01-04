import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  //" Bobiwine is contesting for presidency in 2021"
  const [customcontent, set_customcontent] = useState(" Bobiwine is contesting for presidency in 2021");
  const [serverConent, set_serverContent] = useState(null);


  const [BernoulliNB_classifier_accuracy, set_BernoulliNB_classifier_accuracy] = useState(null);
  const [LinearSVC_accuracy, set_LinearSVC_accuracy] = useState(null);
  const [LogisticRegression_accuracy, set_LogisticRegression_accuracy] = useState(null);
  const [NaiveBayesClassifier_accuracy, set_NaiveBayesClassifier_accuracy] = useState(null);

  const [nuvsc_accuracy, set_nuvsc_accuracy] = useState(null);
  const [sdgclassifier_accuracy, set_sdgclassifier_accuracy] = useState(null);
  const [svc_accuracy, set_svc_accuracy] = useState(null);

  const [voted_classifier_accuracy, set_voted_classifier_accuracy] = useState(null);

  const [show_most_informative_features, set_most_informative_features] = useState(null);

  const [data, set_data] = useState(null);

  const [dataset_length, set_dataset_leneState] = useState(null);

  const [most_common, set_most_common] = useState(null);

  const [result, set_result] = useState(null);


  const [message, set_message] = useState("Submit");
  


  //   LinearSVC-ACCURACY: 66.66666666666666,
  //  LogisticRegression-ACCURACY: 50, 
  //  NaiveBayesClassifier-ACCURACY: 33.33333333333333,
  //   NuSVC-ACCURACY: 66.66666666666666,


  const handleSubmit = (e) => {
    e.preventDefault();
    set_message("Processing ...");
    //custom_content
    axios.post(`http://127.0.0.1:5000/`,{
      custom_content:customcontent
    })
      .then(res => {
        // const posts = res.data.data.children.map(obj => obj.data);
        // this.setState({ posts });

        set_nuvsc_accuracy(res.data['NuSVC-ACCURACY'])
        set_NaiveBayesClassifier_accuracy(res.data['BernoulliNB_classifier-ACCURACY'])
        set_BernoulliNB_classifier_accuracy(res.data['BernoulliNB_classifier-ACCURACY'])
        set_LinearSVC_accuracy(res.data['LinearSVC-ACCURACY'])
        set_LogisticRegression_accuracy(res.data['LogisticRegression-ACCURACY'])
        set_sdgclassifier_accuracy(res.data['SGDClassifier-ACCURACY'])
        set_svc_accuracy(res.data['SVC-ACCURACY'])
        set_voted_classifier_accuracy(res.data['Voted_Classifier_Algo_Accuracy'])
        set_most_informative_features(res.data['classifier-show_most_informative_features'])
        set_data(res.data['data'])
        set_result(res.data['result'])

        set_message("Submit");

        console.log(res.data)

      });



 

  }


  return (
    <div className="App container-fluid">
      <div className="row">


        <header className="App-header">
          <h1>Approval Chain, Simulation Sentiment analysis </h1>
          <br />

          <div class="col-md-6">
            <form raole="form" onSubmit={handleSubmit}>
              <div class="form-group">

                <label for="custom-content">
                  Custom Content :
					</label>
                <input type="text" class="form-control" id="custom-content"
                  onChange={(e) => set_customcontent(e.target.value)} name="schoolname" value={customcontent}

                />
              </div>

              {serverConent}

              <button type="submit" class="btn btn-primary">
                {message}
				</button>
            </form>
          </div>
          <h1>RESULTS</h1>

          <div class="row">
            <div class="col-md-12">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      #
						</th>
                    <th>
                      Item
						</th>
                    <th>
                      Value
						</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>  1 </td>
                    <td>      BernoulliNB_classifier_accuracy 	</td>
                    <td>  {BernoulliNB_classifier_accuracy} 	</td>
                  </tr>


                  <tr>
                    <td>  1 </td>
                    <td>      LinearSVC_accuracy 	</td>
                    <td>  {LinearSVC_accuracy} 	</td>
                  </tr>


                  <tr>
                    <td>  1 </td>
                    <td>      LogisticRegression_accuracy 	</td>
                    <td>  {LogisticRegression_accuracy} 	</td>
                  </tr>


                  <tr>
                    <td>  1 </td>
                    <td>      NaiveBayesClassifier_accuracy 	</td>
                    <td>  {NaiveBayesClassifier_accuracy} 	</td>
                  </tr>


                  <tr>
                    <td>  1 </td>
                    <td>      nuvsc_accuracy 	</td>
                    <td>  {nuvsc_accuracy} 	</td>
                  </tr>

                  <tr>
                    <td>  1 </td>
                    <td>      sdgclassifier_accuracy 	</td>
                    <td>  {sdgclassifier_accuracy} 	</td>
                  </tr>


                  <tr>
                    <td>  1 </td>
                    <td>      svc_accuracy 	</td>
                    <td>  {svc_accuracy} 	</td>
                  </tr>



                  <tr>
                    <td>  1 </td>
                    <td>      voted_classifier_accuracy 	</td>
                    <td>  {voted_classifier_accuracy} 	</td>
                  </tr>



                  <tr>
                    <td>  1 </td>
                    <td>      Result 	</td>
                    <td>  {result} 	</td>
                  </tr>















                </tbody>
              </table>
            </div>
          </div>


          Most Informative Words
        <div className={"com-md-8"}>
            {show_most_informative_features}
          </div>



        </header>
      </div>


    </div>
  );
}

export default App;
