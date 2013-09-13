using UnityEngine;
using System.Collections;

public class CloudMovement : MonoBehaviour {
	public Vector2 velocityRange = Vector2.one;
	public float movementRadius = 3.0f;
	
	private Vector3 _target;
	private Vector3 _originalPosition;
	private float _velocity;
	
	
	void Start () {
		_originalPosition = transform.position;
		UpdateTarget();
	}
	
	void Update () {
		transform.position = Vector3.MoveTowards(transform.position, _target, _velocity*Time.deltaTime);
		
		if (Vector3.Distance(transform.position, _target) < 0.1f) {
			UpdateTarget();	
		}
	}
	
	void UpdateTarget() {
		_target = _originalPosition + new Vector3(RandomDistance(), RandomDistance(), 0);
		_velocity = RandomVelocity();
	}
	
	float RandomDistance() {
		return Random.Range(-movementRadius, movementRadius);	
	}
	
	float RandomVelocity() {
		return Random.Range(velocityRange.x, velocityRange.y);	
	}
}
