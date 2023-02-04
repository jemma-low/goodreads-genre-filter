from flask_restful import Api, Resource, reqparse
from .filter import get_books

class ApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Hello Api Handler"
      }

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('genres', type=str)

    args = parser.parse_args()

    genres = args['genres'].split(',')
    payload = get_books(genres)
    
    final_ret = {"status": "Success", "payload": payload}

    return final_ret