# coding: utf-8

from fastapi.testclient import TestClient


from openapi_server.models.user import User  # noqa: F401


def test_create_user(client: TestClient):
    """Test case for create_user

    Create user
    """
    user = {"first_name":"John","last_name":"James","password":"12345","user_status":1,"phone":"12345","id":10,"email":"john@email.com","username":"theUser"}

    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "POST",
    #    "/user",
    #    headers=headers,
    #    json=user,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200


def test_create_users_with_list_input(client: TestClient):
    """Test case for create_users_with_list_input

    Creates list of users with given input array
    """
    user = [{"first_name":"John","last_name":"James","password":"12345","user_status":1,"phone":"12345","id":10,"email":"john@email.com","username":"theUser"}]

    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "POST",
    #    "/user/createWithList",
    #    headers=headers,
    #    json=user,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200


def test_delete_user(client: TestClient):
    """Test case for delete_user

    Delete user
    """

    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "DELETE",
    #    "/user/{username}".format(username='username_example'),
    #    headers=headers,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200


def test_get_user_by_name(client: TestClient):
    """Test case for get_user_by_name

    Get user by user name
    """

    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "GET",
    #    "/user/{username}".format(username='username_example'),
    #    headers=headers,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200


def test_login_user(client: TestClient):
    """Test case for login_user

    Logs user into the system
    """
    params = [("username", 'username_example'),     ("password", 'password_example')]
    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "GET",
    #    "/user/login",
    #    headers=headers,
    #    params=params,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200


def test_logout_user(client: TestClient):
    """Test case for logout_user

    Logs out current logged in user session
    """

    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "GET",
    #    "/user/logout",
    #    headers=headers,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200


def test_update_user(client: TestClient):
    """Test case for update_user

    Update user
    """
    user = {"first_name":"John","last_name":"James","password":"12345","user_status":1,"phone":"12345","id":10,"email":"john@email.com","username":"theUser"}

    headers = {
    }
    # uncomment below to make a request
    #response = client.request(
    #    "PUT",
    #    "/user/{username}".format(username='username_example'),
    #    headers=headers,
    #    json=user,
    #)

    # uncomment below to assert the status code of the HTTP response
    #assert response.status_code == 200

