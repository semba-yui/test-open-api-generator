// tslint:disable
/**
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we\'ve switched to the design first approach! You can now help us improve the API whether it\'s by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  _If you\'re looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    ModelApiResponse,
    ModelApiResponseFromJSON,
    ModelApiResponseToJSON,
    Pet,
    PetFromJSON,
    PetToJSON,
} from '../models';

export interface AddPetRequest {
    pet: Pet;
}

export interface DeletePetRequest {
    petId: number;
    apiKey?: string;
}

export interface FindPetsByStatusRequest {
    status?: FindPetsByStatusStatusEnum;
}

export interface FindPetsByTagsRequest {
    tags?: Array<string>;
}

export interface GetPetByIdRequest {
    petId: number;
}

export interface UpdatePetRequest {
    pet: Pet;
}

export interface UpdatePetWithFormRequest {
    petId: number;
    name?: string;
    status?: string;
}

export interface UploadFileRequest {
    petId: number;
    additionalMetadata?: string;
    body?: Blob;
}


/**
 * Add a new pet to the store
 * Add a new pet to the store
 */
function addPetRaw<T>(requestParameters: AddPetRequest, requestConfig: runtime.TypedQueryConfig<T, Pet> = {}): QueryConfig<T> {
    if (requestParameters.pet === null || requestParameters.pet === undefined) {
        throw new runtime.RequiredError('pet','Required parameter requestParameters.pet was null or undefined when calling addPet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || PetToJSON(requestParameters.pet),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(PetFromJSON(body), text);
    }

    return config;
}

/**
* Add a new pet to the store
* Add a new pet to the store
*/
export function addPet<T>(requestParameters: AddPetRequest, requestConfig?: runtime.TypedQueryConfig<T, Pet>): QueryConfig<T> {
    return addPetRaw(requestParameters, requestConfig);
}

/**
 * delete a pet
 * Deletes a pet
 */
function deletePetRaw<T>(requestParameters: DeletePetRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.petId === null || requestParameters.petId === undefined) {
        throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling deletePet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    if (requestParameters.apiKey !== undefined && requestParameters.apiKey !== null) {
        headerParameters['api_key'] = String(requestParameters.apiKey);
    }


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* delete a pet
* Deletes a pet
*/
export function deletePet<T>(requestParameters: DeletePetRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deletePetRaw(requestParameters, requestConfig);
}

/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 */
function findPetsByStatusRaw<T>(requestParameters: FindPetsByStatusRequest, requestConfig: runtime.TypedQueryConfig<T, Array<Pet>> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.status !== undefined) {
        queryParameters['status'] = requestParameters.status;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet/findByStatus`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(PetFromJSON), text);
    }

    return config;
}

/**
* Multiple status values can be provided with comma separated strings
* Finds Pets by status
*/
export function findPetsByStatus<T>(requestParameters: FindPetsByStatusRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<Pet>>): QueryConfig<T> {
    return findPetsByStatusRaw(requestParameters, requestConfig);
}

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * Finds Pets by tags
 */
function findPetsByTagsRaw<T>(requestParameters: FindPetsByTagsRequest, requestConfig: runtime.TypedQueryConfig<T, Array<Pet>> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.tags) {
        queryParameters['tags'] = requestParameters.tags;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet/findByTags`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(PetFromJSON), text);
    }

    return config;
}

/**
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
* Finds Pets by tags
*/
export function findPetsByTags<T>(requestParameters: FindPetsByTagsRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<Pet>>): QueryConfig<T> {
    return findPetsByTagsRaw(requestParameters, requestConfig);
}

/**
 * Returns a single pet
 * Find pet by ID
 */
function getPetByIdRaw<T>(requestParameters: GetPetByIdRequest, requestConfig: runtime.TypedQueryConfig<T, Pet> = {}): QueryConfig<T> {
    if (requestParameters.petId === null || requestParameters.petId === undefined) {
        throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling getPetById.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(PetFromJSON(body), text);
    }

    return config;
}

/**
* Returns a single pet
* Find pet by ID
*/
export function getPetById<T>(requestParameters: GetPetByIdRequest, requestConfig?: runtime.TypedQueryConfig<T, Pet>): QueryConfig<T> {
    return getPetByIdRaw(requestParameters, requestConfig);
}

/**
 * Update an existing pet by Id
 * Update an existing pet
 */
function updatePetRaw<T>(requestParameters: UpdatePetRequest, requestConfig: runtime.TypedQueryConfig<T, Pet> = {}): QueryConfig<T> {
    if (requestParameters.pet === null || requestParameters.pet === undefined) {
        throw new runtime.RequiredError('pet','Required parameter requestParameters.pet was null or undefined when calling updatePet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || PetToJSON(requestParameters.pet),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(PetFromJSON(body), text);
    }

    return config;
}

/**
* Update an existing pet by Id
* Update an existing pet
*/
export function updatePet<T>(requestParameters: UpdatePetRequest, requestConfig?: runtime.TypedQueryConfig<T, Pet>): QueryConfig<T> {
    return updatePetRaw(requestParameters, requestConfig);
}

/**
 * 
 * Updates a pet in the store with form data
 */
function updatePetWithFormRaw<T>(requestParameters: UpdatePetWithFormRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.petId === null || requestParameters.petId === undefined) {
        throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.');
    }

    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.name !== undefined) {
        queryParameters['name'] = requestParameters.name;
    }


    if (requestParameters.status !== undefined) {
        queryParameters['status'] = requestParameters.status;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* 
* Updates a pet in the store with form data
*/
export function updatePetWithForm<T>(requestParameters: UpdatePetWithFormRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return updatePetWithFormRaw(requestParameters, requestConfig);
}

/**
 * 
 * uploads an image
 */
function uploadFileRaw<T>(requestParameters: UploadFileRequest, requestConfig: runtime.TypedQueryConfig<T, ModelApiResponse> = {}): QueryConfig<T> {
    if (requestParameters.petId === null || requestParameters.petId === undefined) {
        throw new runtime.RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling uploadFile.');
    }

    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.additionalMetadata !== undefined) {
        queryParameters['additionalMetadata'] = requestParameters.additionalMetadata;
    }

    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/octet-stream';


    const { meta = {} } = requestConfig;

    meta.authType = ['oauth', ["write:pets", "read:pets"]];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/pet/{petId}/uploadImage`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || requestParameters.body as any,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ModelApiResponseFromJSON(body), text);
    }

    return config;
}

/**
* 
* uploads an image
*/
export function uploadFile<T>(requestParameters: UploadFileRequest, requestConfig?: runtime.TypedQueryConfig<T, ModelApiResponse>): QueryConfig<T> {
    return uploadFileRaw(requestParameters, requestConfig);
}


/**
    * @export
    * @enum {string}
    */
export enum FindPetsByStatusStatusEnum {
    Available = 'available',
    Pending = 'pending',
    Sold = 'sold'
}
