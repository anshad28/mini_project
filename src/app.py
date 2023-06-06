from flask import Flask, render_template, request
from model import Model, DecoderType
from main import infer, char_list_from_file

 
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_image', methods=['POST','GET'])
def submitForm():
    if(request.method == 'POST'):
        img = request.files['image']
        path = 'C:\\Users\\anshad c v\\Desktop\\anshad\\SimpleHTR\\src\\static\\input.png'
        img.save(path)
        model = Model(char_list_from_file(), DecoderType.BestPath, must_restore=True)
        print(path)
        res = infer(model, path)
    return render_template('index.html',res=res, image_path='input.png')

if __name__ == '__main__':
    app.run()
